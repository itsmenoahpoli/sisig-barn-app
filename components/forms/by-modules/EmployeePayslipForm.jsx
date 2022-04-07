import React from "react";
import {
  Container,
  Button,
  Form,
  FloatingLabel,
  Card,
  Modal,
} from "react-bootstrap";
import { useForm } from "react-hook-form";

export const EmployeePayslipForm = (props) => {
  const { formFns, values, employees } = props;

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = async (formValues) => {
    await formFns.formSubmitFn(formValues);
  };

  console.log(employees);

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <Form.Group className="form-group">
        <FloatingLabel label="Employee">
          <Form.Select
            className={
              Boolean(errors && errors.employee_id?.type === "required")
                ? "border border-danger"
                : ""
            }
            defaultValue={values?.employee_id}
            {...register("employee_id", { required: true })}
            readOnly={Boolean(values)}
            disabled={Boolean(values)}
            placeholder="Employee"
          >
            <option value="">Choose</option>
            {employees.map((employee) => (
              <option key={employee.id} value={employee.id}>
                {employee.name}
              </option>
            ))}
          </Form.Select>
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="form-group">
        <FloatingLabel label="Payroll/Payslip for Date">
          <Form.Control
            type="date"
            className={
              Boolean(errors && errors.payslip_for_date?.type === "required")
                ? "border border-danger"
                : ""
            }
            {...register("payslip_for_date", { required: true })}
            defaultValue={values?.payslip_for_date}
            readOnly={Boolean(values)}
            placeholder="Payroll/Payslip for Date"
          />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="form-group">
        <FloatingLabel label="Salary Amount">
          <Form.Control
            type="number"
            className={
              Boolean(errors && errors.salary_amount?.type === "required")
                ? "border border-danger"
                : ""
            }
            {...register("salary_amount", { required: true })}
            defaultValue={values?.salary_amount}
            readOnly={Boolean(values)}
            placeholder="Salary Amount"
          />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="form-group">
        <FloatingLabel label="Deduction Amount">
          <Form.Control
            type="number"
            className={
              Boolean(errors && errors.deduction_amount?.type === "required")
                ? "border border-danger"
                : ""
            }
            {...register("deduction_amount", { required: true })}
            defaultValue={values?.deduction_amount}
            readOnly={Boolean(values)}
            placeholder="Deduction Amount"
          />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="form-group">
        <FloatingLabel label="Deduction Reason">
          <Form.Control
            type="text0"
            className={
              Boolean(errors && errors.deduction_reason?.type === "required")
                ? "border border-danger"
                : ""
            }
            {...register("deduction_reason", { required: true })}
            style={{ height: "130px" }}
            as="textarea"
            defaultValue={values?.deduction_reason}
            readOnly={Boolean(values)}
            placeholder="Deduction Reason"
          />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="form-group">
        <FloatingLabel label="No. of Absents">
          <Form.Control
            type="number"
            className={
              Boolean(errors && errors.no_of_absents?.type === "required")
                ? "border border-danger"
                : ""
            }
            {...register("no_of_absents", { required: true })}
            defaultValue={values?.no_of_absents}
            readOnly={Boolean(values)}
            placeholder="No. of Absents"
          />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="form-group">
        <FloatingLabel label="No. of Lates">
          <Form.Control
            type="number"
            className={
              Boolean(errors && errors.no_of_lates?.type === "required")
                ? "border border-danger"
                : ""
            }
            {...register("no_of_lates", { required: true })}
            defaultValue={values?.no_of_lates}
            readOnly={Boolean(values)}
            placeholder="No. of Lates"
          />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="form-group">
        <FloatingLabel label="Additional Details">
          <Form.Control
            type="text0"
            className={
              Boolean(errors && errors.deduction_reason?.type === "required")
                ? "border border-danger"
                : ""
            }
            {...register("deduction_reason", { required: true })}
            style={{ height: "130px" }}
            as="textarea"
            defaultValue={values?.deduction_reason}
            readOnly={Boolean(values)}
            placeholder="Additional Details"
          />
        </FloatingLabel>
      </Form.Group>

      {Boolean(!values) && (
        <Button type="submit">SUBMIT EMPLOYEE PAYSLIP</Button>
      )}
    </Form>
  );
};
