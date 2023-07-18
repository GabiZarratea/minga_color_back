// controllers/companies/admin.js

import Company from '../../models/Company.js';

export const getCompaniesAdmin = async (req, res) => {
  try {
    // Obtener empresas/editoriales activas e inactivas por separado
    const activeCompanies = await Company.find({ active: true });
    const inactiveCompanies = await Company.find({ active: false });

    res.json({ activeCompanies, inactiveCompanies });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las empresas/editoriales' });
  }
};
