import { Box } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions for Admins" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ color: "#FFA726" }} variant="h5">
            How do I add a new user to the system?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Go to the **Profile Form** section in the sidebar and fill out the
            required details such as name, email, department, and role. Once
            submitted, the new user will appear under the **Users List** section.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ color: "#FFA726" }} variant="h5">
            How can I check invoice balances?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can view all invoices under the **Invoices** section. Each record
            displays the total amount, paid amount, and balance. You can also
            filter invoices by client or date range for better tracking.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ color: "#FFA726" }} variant="h5">
            Can I customize the dashboard widgets?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes! Go to **Settings → Dashboard Preferences**, where you can enable,
            disable, or rearrange widgets like Sales Overview, User Activity, and
            Payment Analytics to suit your workflow.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ color: "#FFA726" }} variant="h5">
            What technologies are used in this dashboard?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The Admin Dashboard is developed using **React.js**, **Material UI** for
            the UI components, **Nivo Charts** for data visualization, and
            **React Router** for navigation. It also supports **light and dark
            themes** for a better user experience.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ color: "#FFA726" }} variant="h5">
            How can I view contact information of users?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Navigate to the **Contacts** section in the sidebar. You can view all
            user contact details, search by name or email, and export the list in
            CSV or PDF format for reporting purposes.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
