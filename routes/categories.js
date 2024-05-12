const categoriesRouter = require('express').Router();
  
// Импортируем вспомогательные функции
const {
    findAllCategories,
    createCategory,
    findCategoryById,
    updateCategory,
    deleteCategory, checkIsCategoryExists, checkEmptyName
} = require('../middlewares/categories');
const {
    sendCategoryCreated,
    sendCategoryById,
    sendCategoryUpdated,
    sendCategoryDeleted, sendAllCategories,
    } = require('../controllers/categories');
const {checkAuth} = require("../middlewares/auth");

// Обрабатываем GET-запрос с роутом '/categories'
categoriesRouter.post(
    "/categories",
    findAllCategories,
    checkIsCategoryExists,
    checkEmptyName,
    checkAuth,
    createCategory,
    sendCategoryCreated
);

categoriesRouter.get('/categories', findAllCategories, sendAllCategories);

categoriesRouter.get(
    "/categories/:id",
    findCategoryById,
    sendCategoryById
);

categoriesRouter.put(
    "/categories/:id",
    checkEmptyName,
    checkAuth,
    updateCategory,
    sendCategoryUpdated
);
categoriesRouter.delete(
    "/categories/:id",
    checkAuth,
    deleteCategory,
    sendCategoryDeleted,
    );

module.exports = categoriesRouter;