import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  Stack,
  Divider,
  Container,
} from "@mui/material";

import {
  Phone,
  Mail,
  Language,
  WorkOutlined,
  PersonAddAlt,
  LinkedIn,
  ArrowForward,
} from "@mui/icons-material";

import logo from "../assets/logo.png";

const contacts = [
  {
    id: "safwan",
    name: "Mohammed Safwan",
    role: "Sales Executive",
    phone: "0575268281",
    email: "safwan@zencon-sa.com",
    website: "https://www.zencon-sa.com",
    company: "Zencon Limited Co",
    linkedin: "https://www.linkedin.com/company/zencon-limited-co",
  },
  {
    id: "ahmed",
    name: "Ahmed Ali",
    role: "Sales Manager",
    phone: "0501234567",
    email: "ahmed@zencon-sa.com",
    website: "https://www.zencon-sa.com",
    company: "Zencon Limited Co",
    linkedin: "https://www.linkedin.com/company/zencon-limited-co",
  },
  {
    id: "zencon",
    name: "Zencon Limited Co",
    role: "Company",
    phone: "0501234567",
    email: "info@zencon-sa.com",
    website: "https://www.zencon-sa.com",
    company: "Zencon Limited Co",
    linkedin: "https://www.linkedin.com/company/zencon-limited-co",
  },
];

const getProfileId = () => window.location.hash.replace("#", "") || "zencon";

function DigitalCardPage() {
  const [id, setId] = useState(getProfileId());

  useEffect(() => {
    const handleHashChange = () => setId(getProfileId());
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const contact = contacts.find((item) => item.id === (id || "zencon"));

  const saveContact = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${contact.name}
ORG:${contact.company}
TITLE:${contact.role}
TEL;TYPE=CELL:${contact.phone}
EMAIL:${contact.email}
URL:${contact.website}
END:VCARD`;

    const blob = new Blob([vcard], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `${contact.name}.vcf`;
    link.click();

    window.URL.revokeObjectURL(url);
  };

  const actions = [
    {
      icon: <Phone />,
      label: "Call",
      action: () => (window.location.href = `tel:${contact.phone}`),
    },
    {
      icon: <Mail />,
      label: "Email",
      action: () => (window.location.href = `mailto:${contact.email}`),
    },
    {
      icon: <Language />,
      label: "Website",
      action: () => window.open(contact.website, "_blank"),
    },
  ];

  const rows = [
    {
      icon: <Phone />,
      label: "Mobile",
      value: contact.phone,
      action: () => (window.location.href = `tel:${contact.phone}`),
    },
    {
      icon: <Mail />,
      label: "Email",
      value: contact.email,
      action: () => (window.location.href = `mailto:${contact.email}`),
    },
    {
      icon: <Language />,
      label: "Website",
      value: contact.website.replace("https://", ""),
      action: () => window.open(contact.website, "_blank"),
    },
    {
      icon: <WorkOutlined />,
      label: "Company",
      value: contact.company,
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #243b6b 0%, #071525 42%, #eef2f7 42%, #eef2f7 100%)",
        py: { xs: 0, sm: 5 },
      }}
    >
      <Container maxWidth="xs" sx={{ px: { xs: 0, sm: 2 } }}>
        <Card
          sx={{
            minHeight: { xs: "100vh", sm: "auto" },
            borderRadius: { xs: 0, sm: "34px" },
            overflow: "hidden",
            boxShadow: {
              xs: "none",
              sm: "0 30px 90px rgba(7, 21, 37, 0.35)",
            },
            border: "1px solid rgba(255,255,255,0.18)",
            background: "#fff",
          }}
        >
          {/* HEADER */}
          <Box
            sx={{
              position: "relative",
              px: 3,
              pt: 4.5,
              pb: 4,
              textAlign: "center",
              color: "#fff",
              background:
                "linear-gradient(145deg, #071525 0%, #10294f 55%, #1e3d75 100%)",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at 20% 10%, rgba(255,255,255,0.14), transparent 32%)",
              }}
            />

            <Box sx={{ position: "relative", zIndex: 1 }}>
              <Box
                component="img"
                src={logo}
                alt="Zencon"
                sx={{
                  width: 104,
                  height: 104,
                  borderRadius: "50%",
                  objectFit: "contain",
                  bgcolor: "#fff",
                  p: 1.4,
                  mx: "auto",
                  mb: 2.2,
                  boxShadow: "0 18px 40px rgba(0,0,0,0.28)",
                }}
              />

              <Typography
                sx={{
                  fontSize: { xs: 26, sm: 28 },
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: "-0.4px",
                }}
              >
                {contact.name}
              </Typography>

              <Typography
                sx={{
                  mt: 1,
                  fontSize: 15,
                  color: "rgba(255,255,255,0.82)",
                  fontWeight: 500,
                }}
              >
                {contact.role}
              </Typography>

              <Typography
                sx={{
                  mt: 0.4,
                  fontSize: 13,
                  color: "rgba(255,255,255,0.62)",
                }}
              >
                {contact.company}
              </Typography>
            </Box>
          </Box>

          {/* QUICK ACTIONS */}
          <Box
            sx={{
              px: 2.5,
              mt: -2.8,
              position: "relative",
              zIndex: 5,
            }}
          >
            <Card
              sx={{
                borderRadius: "22px",
                p: 1,
                boxShadow: "0 18px 40px rgba(15,29,54,0.16)",
                border: "1px solid #eef2f7",
              }}
            >
              <Stack direction="row" spacing={1}>
                {actions.map((item, index) => (
                  <Button
                    key={index}
                    fullWidth
                    onClick={item.action}
                    sx={{
                      height: 74,
                      borderRadius: "18px",
                      display: "flex",
                      flexDirection: "column",
                      gap: 0.6,
                      color: "#101d36",
                      textTransform: "none",
                      fontSize: 12,
                      fontWeight: 700,
                      "& svg": {
                        fontSize: 24,
                      },
                      "&:hover": {
                        bgcolor: "#f1f5f9",
                      },
                    }}
                  >
                    {item.icon}
                    {item.label}
                  </Button>
                ))}
              </Stack>
            </Card>
          </Box>

          {/* BODY */}
          <Box sx={{ px: 2.5, pt: 3, pb: 3 }}>
            <Button
              fullWidth
              startIcon={<PersonAddAlt />}
              onClick={saveContact}
              sx={{
                height: 56,
                borderRadius: "18px",
                bgcolor: "#101d36",
                color: "#fff",
                fontSize: 16,
                fontWeight: 800,
                textTransform: "none",
                boxShadow: "0 14px 30px rgba(16,29,54,0.24)",
                "&:hover": {
                  bgcolor: "#1d3158",
                },
              }}
            >
              Save Contact
            </Button>

            <Typography
              align="center"
              sx={{
                mt: 2.4,
                mb: 2.5,
                color: "#64748b",
                fontSize: 13.5,
                lineHeight: 1.7,
                fontWeight: 500,
              }}
            >
              SAP Solutions • Licensing • Implementation • Support
            </Typography>

            <Card
              sx={{
                borderRadius: "24px",
                boxShadow: "none",
                border: "1px solid #e6edf5",
                overflow: "hidden",
              }}
            >
              {rows.map((item, index) => (
                <Box key={index}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1.8}
                    onClick={item.action}
                    sx={{
                      p: 2,
                      minHeight: 76,
                      cursor: item.action ? "pointer" : "default",
                      transition: "0.22s ease",
                      "&:hover": item.action
                        ? {
                            bgcolor: "#f8fafc",
                          }
                        : {},
                    }}
                  >
                    <Box
                      sx={{
                        width: 46,
                        height: 46,
                        borderRadius: "15px",
                        bgcolor: "#f1f5f9",
                        color: "#101d36",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        "& svg": {
                          fontSize: 23,
                        },
                      }}
                    >
                      {item.icon}
                    </Box>

                    <Box sx={{ minWidth: 0, flex: 1 }}>
                      <Typography
                        sx={{
                          fontSize: 12,
                          color: "#64748b",
                          fontWeight: 600,
                          mb: 0.3,
                        }}
                      >
                        {item.label}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: 15,
                          fontWeight: 800,
                          color: "#0f172a",
                          wordBreak: "break-word",
                          lineHeight: 1.35,
                        }}
                      >
                        {item.value}
                      </Typography>
                    </Box>

                    {item.action && (
                      <ArrowForward
                        sx={{
                          color: "#94a3b8",
                          fontSize: 20,
                          flexShrink: 0,
                        }}
                      />
                    )}
                  </Stack>

                  {index !== rows.length - 1 && <Divider />}
                </Box>
              ))}
            </Card>

            <Card
              onClick={() => window.open(contact.linkedin, "_blank")}
              sx={{
                mt: 2,
                p: 2,
                borderRadius: "24px",
                cursor: "pointer",
                boxShadow: "none",
                border: "1px solid #e6edf5",
                transition: "0.22s ease",
                "&:hover": {
                  bgcolor: "#f8fafc",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <Stack direction="row" alignItems="center" spacing={1.8}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: "16px",
                    bgcolor: "#0A66C2",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <LinkedIn />
                </Box>

                <Box sx={{ flex: 1 }}>
                  <Typography
                    sx={{
                      fontWeight: 800,
                      color: "#0f172a",
                      fontSize: 15,
                    }}
                  >
                    LinkedIn
                  </Typography>

                  <Typography sx={{ fontSize: 13, color: "#64748b" }}>
                    {contact.company}
                  </Typography>
                </Box>

                <ArrowForward sx={{ color: "#94a3b8", fontSize: 20 }} />
              </Stack>
            </Card>
          </Box>
        </Card>
      </Container>
    </Box>
  );
}

export default DigitalCardPage;
