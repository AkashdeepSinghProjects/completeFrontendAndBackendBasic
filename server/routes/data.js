import express from "express";

const router = express.Router();

export default router.use((req, res) => {
  res.json([{ name: "Akash", Age: 25 }]);
});
