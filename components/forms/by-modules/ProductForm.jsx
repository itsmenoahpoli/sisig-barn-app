import React from "react";
import {
  Container,
  Button,
  ButtonGroup,
  Form,
  FloatingLabel,
  Card,
  Modal,
} from "react-bootstrap";
import { useForm } from "react-hook-form";

export const ProductForm = (props) => {
  const { formFns, values } = props;

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = async (formValues) => {
    await formFns.formSubmitFn(formValues);
  };

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <Form.Group className="form-group">
        <FloatingLabel label="Category">
          <Form.Select
            type="text"
            className={
              Boolean(errors && errors.category?.type === "required")
                ? "border border-danger"
                : ""
            }
            {...register("category", { required: true })}
            defaultValue={values?.category}
            placeholder="Category"
          >
            <option value="">Choose</option>
            <option value="Meals">Meals</option>
            <option value="Ala Carte">Ala Carte</option>
            <option value="Drinks">Drinks</option>
            <option value="Add-ons">Add-ons</option>
          </Form.Select>
        </FloatingLabel>

        {Boolean(errors && errors.name?.type === "required") && (
          <small className="text-danger">This field is required</small>
        )}
      </Form.Group>

      <Form.Group className="form-group">
        <FloatingLabel label="Name">
          <Form.Control
            type="text"
            className={
              Boolean(errors && errors.name?.type === "required")
                ? "border border-danger"
                : ""
            }
            {...register("name", { required: true })}
            defaultValue={values?.name}
            placeholder="Name"
          />
        </FloatingLabel>

        {Boolean(errors && errors.name?.type === "required") && (
          <small className="text-danger">This field is required</small>
        )}
      </Form.Group>

      <Form.Group className="form-group">
        <FloatingLabel label="Price">
          <Form.Control
            type="number"
            className={
              Boolean(errors && errors.price?.type === "required")
                ? "border border-danger"
                : ""
            }
            {...register("price", { required: true })}
            defaultValue={values?.price}
            placeholder="Price"
          />
        </FloatingLabel>

        {Boolean(errors && errors.price?.type === "required") && (
          <small className="text-danger">This field is required</small>
        )}
      </Form.Group>

      <Form.Group className="form-group">
        <FloatingLabel label="Description">
          <Form.Control
            type="text"
            className={
              Boolean(errors && errors.description?.type === "required")
                ? "border border-danger"
                : ""
            }
            {...register("description", { required: true })}
            defaultValue={values?.description}
            placeholder="Description"
            as="textarea"
            style={{ height: "140px" }}
          />
        </FloatingLabel>

        {Boolean(errors && errors.description?.type === "required") && (
          <small className="text-danger">This field is required</small>
        )}
      </Form.Group>

      <Button type="submit">SUBMIT PRODUCT DETAILS</Button>
    </Form>
  );
};
