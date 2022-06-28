import React from "react";
import {
  Button,
  Form,
  FloatingLabel,
  Row,
  Col,
  Image
} from "react-bootstrap";
import { useForm } from "react-hook-form";

export const ProductForm = (props) => {
  const { formFns, values } = props;
  const uploadInputRef = React.useRef(null)
  const [imagePreview, setImagePreview] = React.useState("")
  const [image, setImage] = React.useState(null);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = async (formValues) => {
    await formFns.formSubmitFn({ ...formValues, image });
  };

  const handleImagePreview = image => {
    if (image) {
      const previewURL = URL.createObjectURL(image);
      setImagePreview(previewURL);
      setImage(image)
    }
  }

  const handleResetImage = () => {
    setImagePreview("")
    setImage(null)

    uploadInputRef.current.value = ""
  }

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <Form.Group className="form-group">
        <Row>
          <Col md={5}>
            <Form.Label>Image</Form.Label>
              <Form.Control
              type="file"
              placeholder="Menu Item Image"
              ref={uploadInputRef}
              onChange={e => handleImagePreview(e.target.files[0])}
            />
            {Boolean(image !== null) && <Button onClick={handleResetImage} variant="link" size="sm">Remove image</Button>}  
          </Col>

          <Col md={7}>
            <div className="col-md-10 mx-auto" style={{height: '300px', padding: '10px', borderRadius: '10px', border: 'solid 1px #eee', backgroundColor: '#f1f1f1'}}>
              {Boolean(image !== null) && <Image src={imagePreview} alt="" style={{height: '100%', width: '100%'}} fluid />}
              {Boolean(values?.image_url) && <Image src={values?.image_url} alt="" style={{height: '100%', width: '100%'}} fluid /> }
            </div>
          </Col>
        </Row>
      </Form.Group>
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
      </Form.Group>

      <Form.Group className="form-group">
        <FloatingLabel label="Price">
          <Form.Control
            type="number"
            min="0"
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
      </Form.Group>

      <Button type="submit">SUBMIT PRODUCT DETAILS</Button>
    </Form>
  );
};
