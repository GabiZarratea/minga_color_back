import User from '../../models/User.js';
import bcrypt from 'bcrypt'

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verificar si el usuario existe en la base de datos
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ success: false, message: 'Email inválido' });
    }

    // Comparar la contraseña proporcionada con la almacenada en la base de datos
    const passwordMatch = bcrypt.compare(password, user.password)
    if (!passwordMatch) {
      return res.status(401).json({ success: false, message: 'Credenciales inválidas' });
    }

    // Enviar los datos del usuario al cliente
    res.json({ success: true, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error en el servidor' });
  }
};

export default signin;