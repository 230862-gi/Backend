import express from "express";
import {createExpense, deleteData, displayData, singleView, updateData} from "../controller/expenseController.js";


//instance
const router=express.Router();

//routes
//instance.Httpmethod('path',handler)
router.post('/add',createExpense);
router.get('/view',displayData);
router.get('/singleView/:id',singleView);
router.delete('/delete/:id',deleteData);
router.put('/update/:id',updateData);

export default router;