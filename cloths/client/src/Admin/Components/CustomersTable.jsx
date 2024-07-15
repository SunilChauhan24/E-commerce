// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";
import { Avatar, CardHeader } from "@mui/material";
import { useNavigate } from "react-router-dom";

const rows = [
  {
    age: 21,
    status: "current",
    date: "09/27/2018",
    name: "Meghana Vavecha",
    salary: "₹45000",
    email: "MeghanaVavecha@sbwire.com",
    designation: "Human Resources Assistant",
    image:
      "https://img.freepik.com/free-photo/portrait-beautiful-young-woman-with-curly-hair-brown-hat_1142-42780.jpg?size=626&ext=jpg&ga=GA1.1.873028923.1698560714&semt=sph",
  },
  {
    age: 22,
    date: "09/23/2016",
    salary: "₹20000",
    status: "professional",
    name: "Jay Usdadiya",
    email: "Jay@thetimes.co.uk",
    designation: "Import Export Manager",
    image:
      "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.873028923.1698560714&semt=sph",
  },
  {
    age: 24,
    date: "10/15/2017",
    name: "Yamini Pandya",
    status: "rejected",
    salary: "₹35000",
    email: "Yamini6@163.com",
    designation: "Salary Distributer",
    image:
      "https://img.freepik.com/free-psd/3d-illustration-person-with-long-hair_23-2149436197.jpg?size=626&ext=jpg&ga=GA1.1.873028923.1698560714&semt=sph",
  },
  {
    age: 30,
    date: "06/12/2018",
    status: "resigned",
    salary: "₹40000",
    name: "Sahil Parmar",
    email: "ParmarSahil@ifeng.com",
    designation: "Sales Representative",
    image:
      "https://img.freepik.com/free-photo/3d-render-little-boy-with-eyeglasses-blue-shirt_1142-50994.jpg?size=626&ext=jpg&ga=GA1.1.873028923.1698560714&semt=sph",
  },
  {
    age: 66,
    status: "applied",
    date: "03/24/2018",
    salary: "₹18000",
    name: "Annie Martin",
    designation: "Operator",
    email: "sganderton2@tuttocitta.it",
    image:
      "https://rukminim1.flixcart.com/image/832/832/xif0q/lehenga-choli/c/v/q/free-half-sleeve-sadhna-kedar-fab-original-imagpawdqwjqz6vt.jpeg?q=70",
  },
  {
    age: 33,
    date: "08/25/2017",
    salary: "₹22000",
    name: "Adeline Day",
    status: "professional",
    email: "hnisius4@gnu.org",
    designation: "Senior Cost Accountant",
  },
  {
    age: 29,
    status: "current",
    date: "06/01/2017",
    salary: "₹33000",
    name: "Lora Jackson",
    designation: "Website Manager",
    email: "LoraJackson@narod.ru",
    image:
      "https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436185.jpg?size=626&ext=jpg&ga=GA1.1.873028923.1698560714&semt=sph",
  },
  {
    age: 22,
    date: "12/03/2017",
    salary: "₹28000",
    name: "Suman Vavecha",
    status: "professional",
    designation: "Cost Accountant",
    email: "Suman@google.co.jp",
    image:
      "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671140.jpg?size=626&ext=jpg&ga=GA1.1.873028923.1698560714&semt=sph",
  },
];

const statusObj = {
  applied: { color: "info" },
  rejected: { color: "error" },
  current: { color: "primary" },
  resigned: { color: "warning" },
  professional: { color: "success" },
};

const CustomersTable = () => {
  const navigate = useNavigate();
  return (
    <Card>
      <CardHeader
        title="Workers Details"
        sx={{
          pt: 2,
          alignItems: "center",
          "& .MuiCardHeader-action": { mt: 0.6 },
        }}
        action={
          <Typography
            onClick={() => navigate("/admin/customers")}
            variant="caption"
            sx={{ color: "blue", cursor: "pointer", paddingRight: ".8rem" }}
          >
            View All
          </Typography>
        }
        titleTypographyProps={{
          variant: "h5",
          sx: {
            lineHeight: "1.6 !important",
            letterSpacing: "0.15px !important",
          },
        }}
      />
      <TableContainer>
        <Table sx={{ minWidth: 390 }} aria-label="table in dashboard">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Salary</TableCell>
              <TableCell>Designation</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((item) => (
              <TableRow
                hover
                key={item.name}
                sx={{ "&:last-of-type td, &:last-of-type th": { border: 0 } }}
              >
                <TableCell>
                  {" "}
                  <Avatar alt={item.name} src={item.image} />{" "}
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.age}</TableCell>
                <TableCell>{item.salary}</TableCell>
                <TableCell>{item.designation}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default CustomersTable;
