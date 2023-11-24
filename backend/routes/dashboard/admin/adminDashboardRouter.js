

const express = require("express")
const ContactUsModel = require("../../../models/ContactUsModel")
const FaqsModel = require("../../../models/FaqsModel")
const BlogsModel = require("../../../models/BlogsModel")
const OrderModel = require("../../../models/OrderModel")
const PaymentModel = require("../../../models/PaymentModel")
const User = require("../../../models/User")
const PlatformModel = require("../../../models/PlatformModel")
const TodoModel = require("../../../models/TodoModel")
const MessageAllModel = require("../../../models/MessageAllModel")
const TicketModule = require("../../../models/TicketModule")
const FaqsSelectedModel = require("../../../models/FaqsSelectedModel")
const uploader = require("../../../lib/imageUpload")
const PaymentMethodsModel = require("../../../models/PaymentMethodsModel")
const router = express.Router()
const moment = require("moment")
const CheckoutModel = require("../../../models/CheckoutModel")









// ------------ Platforms
router.get("/platforms", async (req, res, next) => {
    try {
        const platforms = await PlatformModel.find()
        return res.json(platforms)
    }
    catch (e) {
        return res.status(500).json(e)
    }

})

router.post("/platforms", uploader.platformUploader.any(), async (req, res, next) => {
    try {
        const file = await req.files[0]
        const { name, shortDescription } = req.body
        const platform = new PlatformModel({
            name: name,
            image: "/statics/images/platforms/" + file.filename,
            shortDescription: shortDescription
        })
        return res.json(await platform.save())
    }
    catch (e) {
        next(e)
    }

})





// ------------ Statistics  

router.get("/statistics/orders/new", async (req, res, next) => {
    try {
        const orders = await OrderModel.find({
            status: "on progress"
        })
        return res.json(orders.length)
    }
    catch (e) {
        return next(e)
    }

})

router.get("/statistics/quick-view", async (req, res, next) => {
    try {

        const startOfMonth = moment().startOf("month").toDate();
        const endOfMonth = moment().endOf("month").toDate();


        const totalOrders = await OrderModel.find()
        const completedOrders = totalOrders.filter((item) => { return item.status === "success" })



        const totalServices = await require("../../../catch/services.json")
        const platforms = await PlatformModel.find()


        const totalCheckouts = await CheckoutModel.find({
            status: "green"
        })


        const incomeTotal = totalCheckouts.map(record => {
            return record.amount.amount
        }).reduce((total, index) => { return total += index })

        const incomeThisMonth = (await CheckoutModel.find({
            status: "green",
            createdAt: {
                $gte: startOfMonth,
                $lte: endOfMonth,
            }
        })).reduce((total, next) => {
            return total.amount.amount += next.amount.amount
        })



        const users = await User.find()
        const totalCustomers = users.length
        const usersThisMonth = (await User.find({
            createdAt: {
                $gte: startOfMonth,
                $lte: endOfMonth,
            }
        })).length



        return res.json({
            ordersReceived: {
                totalOrders: totalOrders.length,
                completedOrders: completedOrders.length
            },
            totalServices: {
                total: totalServices.length,
                platforms: platforms.length
            },
            income: {
                total: incomeTotal,
                thisMonth: incomeThisMonth
            },
            customers: {
                total: totalCustomers,
                thisMonth: usersThisMonth
            }
        })
    }
    catch (e) {
        console.log(e)
        return next(e)
    }
})


// Function to get data for a specific status and time period
async function getDataForPeriod(status, start, end) {
    const orders = await OrderModel.find({
        status,
        createdAt: {
            $gte: start,
            $lte: end,
        },
    });

    return orders
}

router.get("/statistics/order-status/weekly", async (req, res, next) => {

    try {
        const startOfWeek = moment().startOf("week");
        const endOfWeek = moment().endOf("week");
        const labels = moment.weekdays()
        const onProgressOrders = await getDataForPeriod("on progress", startOfWeek, endOfWeek);
        const onSuccessOrders = await getDataForPeriod("success", startOfWeek, endOfWeek);
        const onErrorOrders = await getDataForPeriod("on error", startOfWeek, endOfWeek);



        const onProgressData = []
        labels.forEach((dayLabel, index) => {
            const temp = onProgressOrders.filter(item => {
                const dayIndex = item.createdAt.getDay()
                return labels[dayIndex] === dayLabel
            })

            onProgressData.push(temp.length)

        })


        const onSuccessData = []
        labels.forEach((dayLabel, index) => {
            const temp = onSuccessOrders.filter(item => {
                const dayIndex = item.createdAt.getDay()
                return labels[dayIndex] === dayLabel
            })


            onSuccessData.push(temp.length)

        })


        const onErrorData = []
        labels.forEach((dayLabel, index) => {
            const temp = onErrorOrders.filter(item => {
                const dayIndex = item.createdAt.getDay()
                return labels[dayIndex] === dayLabel
            })

            onErrorData.push(temp.length)

        })

        return res.json({
            labels: labels,
            datasets: [
                {
                    label: 'on progress',
                    data: onProgressData, // Add data for all 12 months
                    backgroundColor: '#ffc36c',
                    stack: 'Stack 1',
                },
                {
                    label: 'success',
                    data: onSuccessData, // Add data for all 12 months
                    backgroundColor: 'green',
                    stack: 'Stack 1',
                },
                {
                    label: 'error',
                    data: onErrorData, // Add data for all 12 months
                    backgroundColor: 'red',
                    stack: 'Stack 1',
                },
            ],
            summary: {
                onSuccessData: onSuccessData.reduce((total, b) => { return total + b }),
                onProgressData: onProgressData.reduce((total, b) => { return total + b }),
                onErrorData: onErrorData.reduce((total, b) => { return total + b }),
            }
        })
    }
    catch (e) {
        return next(e)
    }
})


router.get("/statistics/order-status/monthly", async (req, res, next) => {

    try {
        const startOfMonth = moment().startOf("month");
        const endOfMonth = moment().endOf("month");
        const labels = moment.months()
        const onProgressOrders = await getDataForPeriod("on progress", startOfMonth, endOfMonth);
        const onSuccessOrders = await getDataForPeriod("success", startOfMonth, endOfMonth);
        const onErrorOrders = await getDataForPeriod("on error", startOfMonth, endOfMonth);



        const onProgressData = []
        labels.forEach((dayLabel, index) => {
            const temp = onProgressOrders.filter(item => {
                const dayIndex = item.createdAt.getMonth()
                return labels[dayIndex] === dayLabel
            })

            onProgressData.push(temp.length)

        })


        const onSuccessData = []
        labels.forEach((dayLabel, index) => {
            const temp = onSuccessOrders.filter(item => {
                const dayIndex = item.createdAt.getMonth()
                return labels[dayIndex] === dayLabel
            })


            onSuccessData.push(temp.length)

        })


        const onErrorData = []
        labels.forEach((dayLabel, index) => {
            const temp = onErrorOrders.filter(item => {
                const dayIndex = item.createdAt.getMonth()
                return labels[dayIndex] === dayLabel
            })

            onErrorData.push(temp.length)

        })

        return res.json({
            labels: labels,
            datasets: [
                {
                    label: 'on progress',
                    data: onProgressData, // Add data for all 12 months
                    backgroundColor: '#ffc36c',
                    stack: 'Stack 1',
                },
                {
                    label: 'success',
                    data: onSuccessData, // Add data for all 12 months
                    backgroundColor: 'green',
                    stack: 'Stack 1',
                },
                {
                    label: 'error',
                    data: onErrorData, // Add data for all 12 months
                    backgroundColor: 'red',
                    stack: 'Stack 1',
                },
            ],
            summary: {
                onSuccessData: onSuccessData.reduce((total, b) => { return total + b }),
                onProgressData: onProgressData.reduce((total, b) => { return total + b }),
                onErrorData: onErrorData.reduce((total, b) => { return total + b }),
            }
        })
    }
    catch (e) {
        return next(e)
    }
})


router.get("/statistics/order-status/yearly", async (req, res, next) => {

    try {
        const startOfYear = moment("2022-01-01");
        const endOfYear = moment("2025-12-31").endOf("day");
        const labels = [2022, 2023, 2024, 2025, 2026, 2027]
        const onProgressOrders = await getDataForPeriod("on progress", startOfYear, endOfYear);
        const onSuccessOrders = await getDataForPeriod("success", startOfYear, endOfYear);
        const onErrorOrders = await getDataForPeriod("on error", startOfYear, endOfYear);



        const onProgressData = []
        labels.forEach((yearLabel, index) => {
            const temp = onProgressOrders.filter(item => {
                const yearIndex = item.createdAt.getFullYear()
                return yearIndex === yearLabel
            })

            onProgressData.push(temp.length)

        })


        const onSuccessData = []
        labels.forEach((yearLabel, index) => {
            const temp = onSuccessOrders.filter(item => {
                const yearIndex = item.createdAt.getFullYear()
                return yearIndex === yearLabel
            })


            onSuccessData.push(temp.length)

        })


        const onErrorData = []
        labels.forEach((yearLabel, index) => {
            const temp = onErrorOrders.filter(item => {
                const yearIndex = item.createdAt.getFullYear()
                return yearIndex === yearLabel
            })

            onErrorData.push(temp.length)

        })


        return res.json({
            labels: labels,
            datasets: [
                {
                    label: 'on progress',
                    data: onProgressData, // Add data for all 12 months
                    backgroundColor: '#ffc36c',
                    stack: 'Stack 1',
                },
                {
                    label: 'success',
                    data: onSuccessData, // Add data for all 12 months
                    backgroundColor: 'green',
                    stack: 'Stack 1',
                },
                {
                    label: 'error',
                    data: onErrorData, // Add data for all 12 months
                    backgroundColor: 'red',
                    stack: 'Stack 1',
                },
            ],
            summary: {
                onSuccessData: onSuccessData.reduce((total, b) => { return total + b }),
                onProgressData: onProgressData.reduce((total, b) => { return total + b }),
                onErrorData: onErrorData.reduce((total, b) => { return total + b }),
            }
        })
    }
    catch (e) {
        return next(e)
    }
})





router.get("/statistics/users-country", async (req, res) => {
    try {
        const users = await User.find().select("country")
        return res.json(users)
    }
    catch (e) {
        return res.status(500).json(e)
    }
})

router.get("/statistics/recent-customers-activity", async (req, res) => {
    try {
        const recentCustomers = await PaymentModel.find()
        return res.json(recentCustomers)
    }
    catch (e) {
        return res.status(500).json(e)
    }
})

router.get("/statistics/popular-platforms", async (req, res) => {
    try {
        const orders = await OrderModel.find({
            $or: [
                { status: "success" },
                { status: "on progress" },
            ]
        })

        const platforms = await PlatformModel.find()



        let result = []
        platforms.forEach((platform) => {
            result.push({
                platform: platform,
                totalOrders: orders.filter(item => {
                    let serviceName = item.service.name
                    serviceName = serviceName.toLowerCase()


                    const isContaining =
                        serviceName
                            .includes(platform.name.toLowerCase())
                    return isContaining
                }).length
            })
        })

        return res.json(result)
    }
    catch (e) {
        console.log(e)
        return res.status(500).json(e)
    }
})

// Todo-List
router.get("/statistics/todo-list", async (req, res) => {
    try {
        const todoList = await TodoModel.find()
        return res.json(todoList)
    }
    catch (e) {
        return res.status(500).json(e)
    }
})

router.post("/statistics/todo-list", async (req, res) => {
    try {
        const data = req.body

        const todo = new TodoModel({
            ...data
        })
        return res.json(await todo.save())
    }
    catch (e) {
        return res.status(500).json(e)
    }
})

router.put("/statistics/todo-list", async (req, res) => {
    try {
        const data = req.body

        if (!data.id)
            return res.status(401).json("id required")


        const todo = await TodoModel.findByIdAndUpdate(data.id, {
            ...data
        })

        return res.json("todo Updated !")

    }
    catch (e) {
        return res.status(500).json(e)
    }
})

router.delete("/statistics/todo-list", async (req, res) => {
    try {
        const data = req.body

        if (!data.id)
            return res.status(401).json("id required")


        await TodoModel.findByIdAndDelete(data.id)
            .then(result => {
                if (!result)
                    return res.status(400).json("todo not founded!")

                return res.json("todo Deleted !")
            })


    }
    catch (e) {
        return res.status(500).json(e)
    }
})







// Message All 
router.get("/statistics/message-all", async (req, res) => {
    try {
        const allMessages = await MessageAllModel.find()
        return res.json(allMessages)
    }
    catch (e) {
        return res.status(500).json("error")
    }

})

router.post("/statistics/message-all", async (req, res) => {
    try {
        const data = req.body
        const message = new MessageAllModel({
            ...data
        })
        return res.json(await message.save())
    }
    catch (e) {
        return res.status(500).json(e)
    }

})



// ------------- Services
router.get("/services", async (req, res) => {
    const services = await require("../../../catch/services.json")
    return res.json(services)
})


// --------------- Orders
router.get("/orders", async (req, res) => {
    const { pageNumber } = req.body
    if (!pageNumber) {
        return res.status(400).json("Page Number Required !")
    }
    const orders = await OrderModel
        .find()
        .limit(10)
        .skip(pageNumber * 10)
    return res.json(orders)
})




// --------------- Tickets 
router.get("/tickets", async (req, res) => {
    const { pageNumber } = req.body

    if (!pageNumber) {
        return res.status(400).json("Page Number Required !")
    }

    const tickets = await TicketModule
        .find()
        .limit(10)
        .skip(pageNumber * 10)
    return res.json(tickets)
})


// ---------------- Users
router.get("/users", async (req, res) => {
    const users = await User.find()
    return res.json(users)
})


// ---------------- Blogs
router.get("/blogs", async (req, res) => {
    try {
        const blogs = await BlogsModel.find()
        return res.json(blogs)
    }
    catch (e) {

    }
    return res.json("ok add blog")
})

router.post("/blogs", uploader.blogUploader.any(), async (req, res) => {
    try {
        const image = await req.files[0]
        const data = await req.body


        const blog = new BlogsModel({
            image: "/statics/images/blogs/" + image.filename,
            title: data.title,
            description: data.description,
            likes: data.likes,
            published: false
        })

        return res.json(await blog.save())
    } catch (e) {
        console.log(e)
        return res.status(500).json(e)

    }
})





// ------------- Faqs


// selected Faqs
router.get("/selected-faqs", async (req, res) => {
    try {
        const selectedFaqs = await FaqsSelectedModel.find()
        return res.json(selectedFaqs)
    }
    catch (e) {
        return res.json("error", 500)
    }
})
router.post("/selected-faqs", async (req, res) => {
    try {
        const data = req.body

        const selectedFaq = new FaqsSelectedModel({
            ...data
        })
        return res.json(await selectedFaq.save())
    }
    catch (e) {
        return res.json(e, 500)
    }
})

router.delete("/selected-faqs", async (req, res) => {
    try {
        const { id } = req.body
        if (!id)
            return res.status(400).json("id required")

        await FaqsSelectedModel
            .findByIdAndDelete(id).then(res => {
                return res.json("selected Faq Deleted !")
            })
            .catch(err => {
                console.log(err)
                return res.status(500).json("record not found !")
            })
    }
    catch (e) {
        return res.json(e, 500)
    }
})

router.put("/selected-faqs", async (req, res) => {
    try {
        const data = req.body

        if (!data.id)
            return res.status(500).json("id required")

        await FaqsSelectedModel.findByIdAndUpdate(data.id, {
            ...data
        })
            .then(result => {
                if (!result)
                    return res.status(400).json("record not founded")
                return res.json("record updated.")
            })
            .catch(err => {
                return res.status(400).json("record not founded")
            })

    }
    catch (e) {
        return res.json(e, 500)
    }
})



// Normal Faqs 
router.get("/faqs", async (req, res) => {
    try {
        const normalFaqs = await FaqsModel.find()
        return res.json(normalFaqs)
    }
    catch (e) {
        return res.status(500).json(e)
    }
})

router.put("/faqs", async (req, res) => {
    try {
        const { id, answerd } = req.body
        if (!id)
            return res.status(400).json("id required")



        const faqs = await FaqsModel.findByIdAndUpdate(id, {
            answerd
        }).then(result => {
            return res.json("faqs changing success!")
        })
            .catch(err => {
                return res.status(500).json(err)
            })


    }
    catch (e) {
        return res.status(500).json(e)
    }
})



// -------------- Contact Us
router.get("/contact-us", async (req, res) => {

    try {
        const items = await ContactUsModel.find()
        return res.json(items)
    }
    catch (e) {
        return res.json(e)
    }
})

router.put("/contact-us", async (req, res) => {
    try {
        const { id, answerd } = req.body
        if (!id)
            return res.status(400).json("id required")



        const faqs = await ContactUsModel.findByIdAndUpdate(id, {
            answerd
        }).then(result => {
            return res.json("contact-us changing success!")
        })
            .catch(err => {
                return res.status(500).json(err)
            })


    }
    catch (e) {
        return res.status(500).json(e)
    }
})





router.get("/payment-methods", async (req, res, next) => {
    try {
        const methods = await PaymentMethodsModel.find()
        return res.json(methods)
    }
    catch (e) {
        next(e)
    }
})

router.post(
    "/payment-methods",
    uploader.paymentMethodsUploader.any(),
    async (req, res, next) => {
        try {

            const image = await req.files[0]
            const {
                name,
                available,
                description,
                site
            } = req.body

            const method = await new PaymentMethodsModel({
                name: name,
                available: available,
                image: "/statics/images/payment-methods/" + image.filename,
                description: description,
                site: site
            })


            return res.json(await method.save())

        }
        catch (e) {
            next(e)
        }
    })






module.exports = router