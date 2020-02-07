import React from 'react';
import 'antd/dist/antd.css';
import { Icon, Form, Modal, Upload, Input, Button, message, notification, Rate } from 'antd';

const { TextArea } = Input;

const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
        const { status } = info.file;
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
}

const title = "Error"

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

class Review extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            disableUpload: false,
            value: 0,
            disable: false,
            editValue: this.props.editValue ? this.props.editValue : '',
            starValues: {
                applicationStars: 0,
                featuresStars: 0,
                clarityStars: 0,
                privacyStars: 0,
                customerService: 0
            }
        }
    }

    openNotification = (title, desc1, icon, color = '#108ee9') => {
        notification.open({
            message: title,
            description: desc1,
            icon: <Icon type={icon} style={{ color: color }} />,
        });
    };

    handleChange = value => {
        this.setState({ value });
    };

    normFile = e => {
        this.setState({ disableUpload: false })
        if (e.file.type.indexOf('video')) {
            this.openNotification('Error', 'Please Upload a Video', 'close-circle', 'red')
            return
        }
        if (Array.isArray(e)) {
            return e;
        }
        if (e.fileList.length) {
            this.setState({ disableUpload: true })
        }
        return e && e.fileList;
    }

    handleSubmit = e => {
        var { editValue } = this.state
        e.preventDefault();
        this.props.form.validateFields((err, values) => {

            if (!err) {
                this.setState({
                    disable: true
                })
                if (editValue) {
                    editValue.feedback = values.feedback
                    return this.props.handleUpdate(editValue)
                }
                this.props.handleCreate(values)
            }
            else {
                this.openNotification(title, "SomeThing Went wrong", 'close-circle', 'red')
            }
        });
    };

    render() {
        const { visible, onCancel, form } = this.props;
        const { getFieldDecorator } = form;
        const { disableUpload, starValues, disable, editValue } = this.state
        return (
            <Modal
                visible={visible}
                title="Add Image Details"
                okText={!disable ? "Submit" : "Uploading"}
                okButtonProps={{ disabled: disable, loading: disable }}
                onCancel={onCancel}
                onOk={this.handleSubmit}
            >
                <Form layout="vertical">
                    <Form.Item label="feedback">
                        {getFieldDecorator('feedback', {
                            initialValue: editValue ? editValue.feedback : '',
                            rules: [{ required: true, message: 'Please Add the Feedback!' }]
                        })(<TextArea rows={3} minLength={10} />)}
                    </Form.Item>
                    <Form.Item label="Company Name">
                        {getFieldDecorator('name', {
                            initialValue: editValue ? editValue.feedback : '',
                            rules: [{ required: true, message: 'Please Add the Company Name!' }]
                        })(<Input minLength={5} />)}
                    </Form.Item>
                    <Form.Item label="Company Address">
                        {getFieldDecorator('address', {
                            initialValue: editValue ? editValue.feedback : '',
                            rules: [{ required: true, message: 'Please Add the Company Address!' }]
                        })(<Input minLength={10} />)}
                    </Form.Item>
                    <Form.Item label="Company Website">
                        {getFieldDecorator('url', {
                            initialValue: editValue ? editValue.feedback : '',
                            rules: [{ required: true, message: 'Please Add the Company Address!' }]
                        })(<Input minLength={10} />)}
                    </Form.Item>
                    <Form.Item label="Application">
                        {getFieldDecorator('applicationStars', {
                            rules: [{ required: editValue ? false : true, message: 'Please give stars also' }]
                        })(<span>
                            <Rate tooltips={desc} onChange={(value) => this.setState({
                                starValues: {
                                    ...starValues,
                                    applicationStars: value
                                },
                            })} value={starValues.applicationStars} />
                            {starValues.applicationStars ? <span className="ant-rate-text">{desc[starValues.applicationStars - 1]}</span> : ''}
                        </span>)}
                    </Form.Item>
                    <Form.Item label="Features">
                        {getFieldDecorator('featuresStars', {
                            rules: [{ required: editValue ? false : true, message: 'Please give stars also' }]
                        })(<span>
                            <Rate tooltips={desc} onChange={(value) => this.setState({
                                starValues: {
                                    ...starValues,
                                    featuresStars: value
                                }
                            })} value={starValues.featuresStars} />
                            {starValues.featuresStars ? <span className="ant-rate-text">{desc[starValues.featuresStars - 1]}</span> : ''}
                        </span>)}
                    </Form.Item>
                    <Form.Item label="Clarity">
                        {getFieldDecorator('clarityStars', {
                            rules: [{ required: editValue ? false : true, message: 'Please give stars also' }]
                        })(<span>
                            <Rate tooltips={desc} onChange={(value) => this.setState({
                                starValues: {
                                    ...starValues,
                                    clarityStars: value
                                }
                            })} value={starValues.clarityStars} />
                            {starValues.clarityStars ? <span className="ant-rate-text">{desc[starValues.clarityStars - 1]}</span> : ''}
                        </span>)}
                    </Form.Item>
                    <Form.Item label="Privacy">
                        {getFieldDecorator('privacyStars', {
                            rules: [{ required: editValue ? false : true, message: 'Please give stars also' }]
                        })(<span>
                            <Rate tooltips={desc} onChange={(value) => this.setState({
                                starValues: {
                                    ...starValues,
                                    privacyStars: value
                                }
                            })} value={starValues.privacyStars} />
                            {starValues.privacyStars ? <span className="ant-rate-text">{desc[starValues.privacyStars - 1]}</span> : ''}
                        </span>)}
                    </Form.Item>
                    <Form.Item label="Customer">
                        {getFieldDecorator('customerService', {
                            rules: [{ required: editValue ? false : true, message: 'Please give stars also' }]
                        })(<span>
                            <Rate tooltips={desc} onChange={(value) => this.setState({
                                starValues: {
                                    ...starValues,
                                    customerService: value
                                }
                            })} value={starValues.customerService} />
                            {starValues.customerService ? <span className="ant-rate-text">{desc[starValues.customerService - 1]}</span> : ''}
                        </span>)}
                    </Form.Item>
                    {!editValue ? <Form.Item >
                        {getFieldDecorator('video', {
                            rules: [{ required: false, message: 'Please Upload the Image!' }],
                            valuePropName: 'fileList',
                            getValueFromEvent: this.normFile,
                        })(
                            <Upload name="logo" listType="picture" accept="video/*">
                                <Button disabled={disableUpload}>
                                    <Icon type="upload" /> Click to upload
                      </Button>
                            </Upload>,
                        )}
                    </Form.Item> : null}
                </Form>
            </Modal>
        );
    }
}

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(Review)

export default CollectionCreateForm