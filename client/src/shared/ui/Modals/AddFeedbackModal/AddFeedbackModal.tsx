import React, { useState } from "react";
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
import { SubmitHandler, useForm } from "react-hook-form";
import { createFeedbackForm } from "../../../../@types/createFeedbackForm";
import { bannedWords } from "../../../helpers/bannedWords";
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

  const [category, setCategory] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createFeedbackForm>();
  const onSubmit: SubmitHandler<createFeedbackForm> = (data) => {
    alert(data.category);
  };

  return (
    <div
      onClick={setVisibility}
      className={`${styles.modal} ${isActive ? styles.active : ""}`}
    >
      <div onClick={(e) => e.stopPropagation()} className={styles.content}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.overflow}>
          <h3 className={styles.title}>
            Create feedback
            <img onClick={setVisibility} src={closeIcon} alt="" />
          </h3>
          <textarea
            {...register("text", {
              required: "Name is required",
              pattern: {
                value: bannedWords,
                message: "Enter valid text",
              },
            })}
            className={styles.commentInput}
            placeholder="What do you think about think client?"
          ></textarea>
          <div>{errors.category?.message}</div>
          <div className={styles.actions}>
            <FormControl sx={{ marginBottom: "16px", flex: "1 1 auto" }}>
              <InputLabel className={styles.select} sx={{ width: "100px" }}>
                Категория
              </InputLabel>
              <Select
                sx={{ color: "red" }}
                {...register("category", {
                  required: "Category is required",
                })}
                value={category}
                label="Age"
                onChange={(event) => {
                  setCategory(event?.target.value as string);
                }}
              >
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
          <CreateFeedbackButton clickHandler={() => {}} />
        </form>
      </div>
    </div>
  );
};

export default AddFeedbackModal;
