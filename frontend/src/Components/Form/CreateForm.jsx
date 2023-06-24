import React, { useState } from "react";
import { Button, Modal, Form, Input, Select, Radio, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { createTransaction } from "../../apis/transactions";
import "./CreateForm.css";

const { Option } = Select;

const CreateForm = ({ recordType, recordFields, reload, handleSubmit }) => {
  // create a state variable to control the visibility of the popup
  const [visible, setVisible] = useState(false);

  // create a state variable to control the loading status of the popup
  const [confirmLoading, setConfirmLoading] = useState(false);

  // create a state variable to store the input values
  const [inputValues, setInputValues] = useState({});

  // handle the submit button click event
  // const handleSubmit = async () => {
  //   // set the loading status to true
  //   setConfirmLoading(true);

  //   // create a new record in the database
  //   const response = await createTransaction(recordType, inputValues);

  //   // if the response is successful
  //   if (response.status === 200) {
  //     // show a success message
  //     message.success("Create Successfully");

  //     // reload the page
  //     // reload();
  //   } else {
  //     // show an error message
  //     message.error(response.data);
  //   }

  //   // set the loading status to false
  //   setConfirmLoading(false);

  //   // close the popup
  //   setVisible(false);
  // };

  // handle the cancel button click event
  const handleCancel = () => {
    // close the popup
    setVisible(false);
  };

  // handle the input value change event
  const handleChange = (event, field) => {
    // get the input value
    const inputValue = event.target.value;

    // update the input values
    setInputValues({ ...inputValues, [field]: inputValue });
  };
  return (
    <div>
      {/* open or not */}
      {!visible ? null : (
        <Modal
          title="Create"
          visible={visible}
          onOk={() => handleSubmit()}
          confirm
          onCancel={() => handleCancel()}
          confirmLoading={confirmLoading}
          okText="Create"
        >
          <Form>
            {recordFields?.map((field) => {
              return (
                <Form.Item label={field?.label} sx={{}}>
                  {field?.type === "input" ? (
                    <Input
                      placeholder={field?.placeholder}
                      onChange={(event) => handleChange(event, field?.name)}
                    />
                  ) : field?.type === "select" ? (
                    <Select
                      placeholder={field?.placeholder}
                      onChange={(event) => handleChange(event, field?.name)}
                    >
                      {/* {field?.options.map((option) => {
                        return <Option value={option}>{option}</Option>;
                      })} */}
                    </Select>
                  ) : field?.type === "radio" ? (
                    <Radio.Group
                      onChange={(event) => handleChange(event, field?.name)}
                    >
                      {field?.options?.map((option) => {
                        return <Radio value={option}>{option}</Radio>;
                      })}
                    </Radio.Group>
                  ) : field?.type === "text" ? (
                    <Input
                      placeholder={field?.placeholder}
                      onChange={(event) => handleChange(event, field?.name)}
                      type="text"
                    />
                  ) : field?.type === "number" ? (
                    <Input
                      placeholder={field?.placeholder}
                      onChange={(event) => handleChange(event, field?.name)}
                      type="number"
                    />
                  ) : field?.type === "date" ? (
                    <Input
                      placeholder={field?.placeholder}
                      onChange={(event) => handleChange(event, field?.name)}
                      type="date"
                    />
                  ) : null}
                </Form.Item>
              );
            })}
          </Form>
        </Modal>
      )}
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => setVisible(true)}
      >
        Create
      </Button>
    </div>
  );
};

export default CreateForm;
