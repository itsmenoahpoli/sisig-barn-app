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

export const EmployeeForm = (props) => {
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
      </Form.Group>

      <Form.Group className="form-group">
        <FloatingLabel label="Email">
          <Form.Control
            type="text"
            className={
              Boolean(errors && errors.email?.type === "required")
                ? "border border-danger"
                : ""
            }
            {...register("email", { required: true })}
            defaultValue={values?.email}
            placeholder="Email"
          />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="form-group">
        <FloatingLabel label="Contacts">
          <Form.Control
            type="text"
            className={
              Boolean(errors && errors.contacts?.type === "required")
                ? "border border-danger"
                : ""
            }
            {...register("contacts", { required: true })}
            defaultValue={values?.contacts}
            placeholder="Contacts"
          />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="form-group">
        <FloatingLabel label="Birthdate">
          <Form.Control
            type="date"
            className={
              Boolean(errors && errors.birthdate?.type === "required")
                ? "border border-danger"
                : ""
            }
            {...register("birthdate", { required: true })}
            defaultValue={values?.birthdate}
            placeholder="birthdate"
          />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="form-group">
        <FloatingLabel label="Gender">
          <Form.Select
            type="date"
            className={
              Boolean(errors && errors.gender?.type === "required")
                ? "border border-danger"
                : ""
            }
            {...register("gender", { required: true })}
            defaultValue={values?.gender}
            placeholder="Gender"
          >
            <option value="">Choose</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Form.Select>
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="form-group">
        <FloatingLabel label="Address">
          <Form.Control
            type="text"
            className={
              Boolean(errors && errors.address?.type === "required")
                ? "border border-danger"
                : ""
            }
            {...register("address", { required: true })}
            style={{ height: "130px" }}
            as="textarea"
            defaultValue={values?.address}
            placeholder="Address"
          />
        </FloatingLabel>
      </Form.Group>

      <Button type="submit">SUBMIT EMPLOYEE</Button>
    </Form>
  );
};
