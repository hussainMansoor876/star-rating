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
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
}

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

class Review extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            disableUpload: false,
            value: 0,
            starValues: {
                applicationStars: 0,
                featuresStars: 0,
                clarityStars: 0,
                privacyStars: 0,
                customerService: 0
            }
        }
    }

    openNotification = (title, desc, icon, color = '#108ee9') => {
        notification.open({
            message: title,
            description: desc,
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

    render() {
        const { visible, onCancel, onCreate, form } = this.props;
        const { getFieldDecorator } = form;
        const { disableUpload, value, starValues } = this.state
        return (
            <Modal
                visible={visible}
                title="Add Image Details"
                okText="Create"
                onCancel={onCancel}
                onOk={onCreate}
            >
                <Form layout="vertical">
                    <Form.Item label="feedback">
                        {getFieldDecorator('feedback', {
                            rules: [{ required: true, message: 'Please Add the description of Image!' }]
                        })(<TextArea rows={3} />)}
                    </Form.Item>
                    <Form.Item label="Application">
                        {getFieldDecorator('applicationStars', {
                            rules: [{ required: true, message: 'Please give stars also' }]
                        })(<span>
                            <Rate tooltips={desc} onChange={(value) => this.setState({
                                starValues: {
                                    ...starValues,
                                    applicationStars: value
                                }
                            })} value={starValues.applicationStars} />
                            {value ? <span className="ant-rate-text">{desc[starValues.applicationStars - 1]}</span> : ''}
                        </span>)}
                    </Form.Item>
                    <Form.Item label="Features">
                        {getFieldDecorator('featuresStars', {
                            rules: [{ required: true, message: 'Please give stars also' }]
                        })(<span>
                            <Rate tooltips={desc} onChange={(value) => this.setState({
                                starValues: {
                                    ...starValues,
                                    featuresStars: value
                                }
                            })} value={starValues.featuresStars} />
                            {value ? <span className="ant-rate-text">{desc[starValues.featuresStars - 1]}</span> : ''}
                        </span>)}
                    </Form.Item>
                    <Form.Item label="Clarity">
                        {getFieldDecorator('clarityStars', {
                            rules: [{ required: true, message: 'Please give stars also' }]
                        })(<span>
                            <Rate tooltips={desc} onChange={(value) => this.setState({
                                starValues: {
                                    ...starValues,
                                    clarityStars: value
                                }
                            })} value={starValues.clarityStars} />
                            {value ? <span className="ant-rate-text">{desc[starValues.clarityStars - 1]}</span> : ''}
                        </span>)}
                    </Form.Item>
                    <Form.Item label="Privacy">
                        {getFieldDecorator('privacyStars', {
                            rules: [{ required: true, message: 'Please give stars also' }]
                        })(<span>
                            <Rate tooltips={desc} onChange={(value) => this.setState({
                                starValues: {
                                    ...starValues,
                                    privacyStars: value
                                }
                            })} value={starValues.privacyStars} />
                            {value ? <span className="ant-rate-text">{desc[starValues.privacyStars - 1]}</span> : ''}
                        </span>)}
                    </Form.Item>
                    <Form.Item label="Customer">
                        {getFieldDecorator('customerService', {
                            rules: [{ required: true, message: 'Please give stars also' }]
                        })(<span>
                            <Rate tooltips={desc} onChange={(value) => this.setState({
                                starValues: {
                                    ...starValues,
                                    customerService: value
                                }
                            })} value={starValues.customerService} />
                            {value ? <span className="ant-rate-text">{desc[starValues.customerService - 1]}</span> : ''}
                        </span>)}
                    </Form.Item>
                    <Form.Item >
                        {getFieldDecorator('video', {
                            rules: [{ required: false, message: 'Please Upload the Image!' }],
                            valuePropName: 'fileList',
                            getValueFromEvent: this.normFile,
                        })(
                            <Upload name="logo" listType="picture" accept="video/*" {...props}>
                                <Button disabled={disableUpload}>
                                    <Icon type="upload" /> Click to upload
                      </Button>
                            </Upload>,
                        )}
                    </Form.Item>
                </Form>
            </Modal>
        );
    }
}

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(Review)

export default CollectionCreateForm