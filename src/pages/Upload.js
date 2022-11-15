import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import styled from "@emotion/styled";
import {
  Box,
  Button,
  Container,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";

import { ReactComponent as BackArrow } from "../assets/images/backArrow.svg";
import { ReactComponent as Folder } from "../assets/images/folderIcon.svg";
import { ReactComponent as Avatar } from "../assets/images/avatar.svg";
import { ReactComponent as Refresh } from "../assets/images/refreshBtn.svg";
import { ReactComponent as VisibleIcon } from "../assets/images/visible-icon.svg";
import { ReactComponent as TrashIcon } from "../assets/images/trash-icon.svg";
import { ReactComponent as PNGFile } from "../assets/images/png-file-type.svg";
import Sidebar from "../components/Sidebar";

// TODO: add logic to track Tablist in Sidebar

const LightText = styled(Typography)({
  color: "#6B6C7E",
});

const stackHeaderStyles = {
  flexDirection: "row",
  gap: "1rem",
  textAlign: "center",
  "& h1": {
    fontSize: "1.688rem",
    pb: "0.5rem",
  },
  // "& p": {
  //   color: "#6B6C7E",
  // },
};

const iconStyles = {
  cursor: "pointer",
  fontSize: "3rem",
  "&:hover": {
    // this is not applying because of the bgColor from the svg file; plz fix
    backgroundColor: "#F8F7FA",
  },
};

const stackUploadStyles = {
  border: "0.1rem dashed #CDCED9",
  borderRadius: "4px",
  cursor: "pointer",
  alignItems: "center",
  gap: "0.5rem",
  my: "3rem",
  p: "2rem",
  textAlign: "center",
  "& p:nth-of-type(1)": {
    color: "#1E0A3C",
    fontWeight: 500,
  },
  "& span": {
    color: "#9A0002",
  },
};

const stackUploadInfoStyles = {
  borderBottom: "0.063rem solid #E0E0E0",
  flexDirection: "row",
  justifyContent: "space-between",
  my: "2.5rem",
  pb: "1rem",
};

const stackUploadTextWrapperStyles = {
  flexDirection: "row",
  alignItems: "center",
  gap: "1rem",
  "& h5": {
    fontSize: "1.25rem",
  },
  "& p": {
    fontSize: "1.075rem",
  },
  "& svg": {
    height: 41,
    width: 40,
  },
};

const stackUploadIconStyles = {
  flexDirection: "row",
  alignItems: "center",
  gap: "0.5rem",
  "& svg": {
    height: 32,
    width: 31,
  },
};

const stackPreviewWrapperStyles = {
  border: "0.065rem solid #E5E5EA",
  gap: "1rem",
  mx: { sm: "3rem" },
  p: "1rem 2rem",
};

const stackPreviewTextStyles = {
  backgroundColor: "#F8F7FA",
  gap: "1rem",
  padding: "1.5rem",
  "& h5": {
    fontSize: "1.159rem",
    color: "#1E0A3C",
  },
  "& p": {
    fontSize: "1.029rem",
    color: "#6B6C7E",
  },
};

const stackPreviewAvatarWrapper = {
  alignItems: "center",
  alignSelf: "center",
  border: "0.065rem dashed #5ACA75", // 0.065rem = 1px
  borderRadius: "0.313rem", // 0.313rem = 5px
  py: "3rem",
  width: { xs: "100%", sm: "70%" },
};

const stackButtonWrapper = {
  flexDirection: "row",
  justifyContent: "space-around",
  my: "2rem",
  gap: { xs: "0.5rem" },
};

const Upload = () => {
  const [isUpload, setIsUpload] = useState(false);
  const [files, setFiles] = useState([]);
  const [drawerWidth, handleDrawerToggle, mobileOpen] = useOutletContext();
  const navigate = useNavigate();

  const boxWrapperStyles = {
    py: 3,
    width: { md: `calc(110% - ${drawerWidth})` },
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [".jpeg", ".png"] },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      setIsUpload(true);
    },
  });

  const images = files.map((file) => {
    return (
      <div key={file.name}>
        <div>
          <img src={file.preview} style={{ width: "200px" }} alt="preview" />
        </div>
      </div>
    );
  });

  const UploadSummary = () => {
    return files.map((file) => {
      const { name, size } = file;
      let date = new Date().toLocaleDateString([], {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      let time = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      return (
        <Stack sx={stackUploadInfoStyles} key={name}>
          <Stack sx={stackUploadTextWrapperStyles}>
            <PNGFile viewBox="0 0 33 34" />
            <Stack>
              <Typography variant="h5">{name}</Typography>
              <LightText>
                {date} at {time} • {(size / 1000000).toFixed(1)} Mb
              </LightText>
            </Stack>
          </Stack>
          <Stack sx={stackUploadIconStyles}>
            <VisibleIcon viewBox="0 0 24 25" />
            <TrashIcon viewBox="0 0 24 25" />
          </Stack>
        </Stack>
      );
    });
  };

  const handleClick = () => {
    navigate("/biodata");
  };

  const handleReUpload = () => {
    setFiles([]);
    setIsUpload(false);
  };

  const handleSaveUpload = () => {
    if (files.length === 0) {
      alert("Invalid file type. Please re-upload a png/jpeg file");
      return;
    } else {
      navigate("/upload-success");
    }
  };

  return (
    <div>
      <Sidebar
        drawerWidth={drawerWidth}
        drawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
      <Container maxWidth="md">
        <Box sx={boxWrapperStyles}>
          <Stack sx={stackHeaderStyles}>
            <SvgIcon viewBox="0 0 40 40" sx={iconStyles} onClick={handleClick}>
              <BackArrow />
            </SvgIcon>

            <Box>
              <Typography variant="h1">Upload Passport</Typography>
              <LightText>
                Upload your passport-sized photo to complete identity
                verification
              </LightText>
            </Box>
          </Stack>
          {!isUpload ? (
            <Stack sx={stackUploadStyles} {...getRootProps()}>
              <input {...getInputProps()} />
              <Folder viewBox="0 0 41 40" />
              <Typography>
                <span>click here</span> to upload passport
              </Typography>
              <LightText>Format (jpg, png). Maximum of 2MB</LightText>
            </Stack>
          ) : (
            <UploadSummary />
          )}

          <Stack sx={stackPreviewWrapperStyles}>
            <Stack sx={stackPreviewTextStyles}>
              <Typography variant="h5">Passport Preview</Typography>
              <Typography>
                This is a preview of how your uploaded photo will appear on your
                ID card. Feel free to re-upload or submit by clicking "Save &
                Upload".
              </Typography>
            </Stack>
            <Stack sx={stackPreviewAvatarWrapper}>
              {!isUpload ? <Avatar viewBox="0 0 200 200" /> : images}
            </Stack>
          </Stack>
          {isUpload && (
            <Stack sx={stackButtonWrapper}>
              <Button
                variant="contained-alt"
                startIcon={<Refresh viewBox="0 0 14 15" />}
                onClick={handleReUpload}
              >
                Re-upload
              </Button>
              <Button variant="contained-main" onClick={handleSaveUpload}>
                Save & Upload
              </Button>
            </Stack>
          )}
        </Box>
      </Container>
    </div>
  );
};

export default Upload;
