import React from "react";
import styles from "./AddFeedbackModal.module.scss";
import CreateFeedbackButton from "../../Buttons/CreateFeedbackButton/CreateFeedbackButton";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { capitalizeFullName } from "../../../helpers/capitalizeFullName";
import StarIcon from "@mui/icons-material/Star";
import Rating from "@mui/material/Rating";
import closeIcon from "../../../assets/close_icon.svg";
type AddFeedbackModalProps = {
  isActive: boolean;
  setVisibility: () => void;
};

const AddFeedbackModal: React.FC<AddFeedbackModalProps> = ({
  isActive,
  setVisibility,
}) => {
  const categories = ["marketing sd", "seo", "smm"];
  const categoriesSelectItems = categories.map((item) => (
    <MenuItem value={item}>{capitalizeFullName(item)}</MenuItem>
  ));

  return (
    <div
      onClick={setVisibility}
      className={`${styles.modal} ${isActive ? styles.active : ""}`}
    >
      <div onClick={(e) => e.stopPropagation()} className={styles.content}>
        <div className={styles.overflow}>
          <h3 className={styles.title}>
            Create feedback
            <img onClick={setVisibility} src={closeIcon} alt="" />
          </h3>
          <textarea
            className={styles.commentInput}
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="What do you think about think client?"
          ></textarea>
          <div className={styles.actions}>
            <FormControl sx={{ marginBottom: "16px", flex: "1 1 auto" }}>
              <InputLabel sx={{ width: "100px" }}>Категория</InputLabel>
              <Select value={20} label="Age" onChange={() => {}}>
                {categoriesSelectItems}
              </Select>
            </FormControl>
            <Rating
              name="hover-feedback"
              value={4}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
          </div>
          <CreateFeedbackButton
            clickHandler={() => {
              alert("hi");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AddFeedbackModal;
