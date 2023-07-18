import Company from "../../models/Company.js";

const createCompany = async (req, res) => {
    try {
      const { name, address, active } = req.body;
      const newCompany = new Company({
        name,
        address,
        active,
      });
      await newCompany.save();
  
      res.status(201).json(newCompany);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear la editorial' });
    }
  };

  export default createCompany