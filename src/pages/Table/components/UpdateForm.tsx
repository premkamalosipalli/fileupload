import {
  ProFormDateTimePicker,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  StepsForm,
} from '@ant-design/pro-components';
import { Modal } from 'antd';
import React from 'react';

export interface FormValueType extends Partial<API.UserInfo> {
  target?: string;
  template?: string;
  type?: string;
  time?: string;
  frequency?: string;
}

export interface UpdateFormProps {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => Promise<void>;
  updateModalVisible: boolean;
  values: Partial<API.UserInfo>;
}

const UpdateForm: React.FC<UpdateFormProps> = (props) => (
  <StepsForm
    stepsProps={{
      size: 'small',
    }}
    stepsFormRender={(dom, submitter) => {
      return (
        <Modal
          width={640}
          bodyStyle={{ padding: '32px 40px 48px' }}
          destroyOnClose
          title="规则配置"
          open={props.updateModalVisible}
          footer={submitter}
          onCancel={() => props.onCancel()}
        >
          {dom}
        </Modal>
      );
    }}
    onFinish={props.onSubmit}
  >
    <StepsForm.StepForm
      initialValues={{
        name: props.values.name,
        nickName: props.values.nickName,
      }}
      title="Basic Information"
    >
      <ProFormText
        width="md"
        name="name"
        label="Rule name"
        rules={[{ required: true, message: 'Please enter a rule name！' }]}
      />
      <ProFormTextArea
        name="desc"
        width="md"
        label="Rule description"
        placeholder="Please enter at least five characters"
        rules={[
          {
            required: true,
            message:
              'Please enter a rule description of at least five characters！',
            min: 5,
          },
        ]}
      />
    </StepsForm.StepForm>
    <StepsForm.StepForm
      initialValues={{
        target: '0',
        template: '0',
      }}
      title="配置规则属性"
    >
      <ProFormSelect
        width="md"
        name="target"
        label="Monitoring object"
        valueEnum={{
          0: '表一',
          1: '表二',
        }}
      />
      <ProFormSelect
        width="md"
        name="template"
        label="规则模板"
        valueEnum={{
          0: '规则模板一',
          1: '规则模板二',
        }}
      />
      <ProFormRadio.Group
        name="type"
        width="md"
        label="规则类型"
        options={[
          {
            value: '0',
            label: '强',
          },
          {
            value: '1',
            label: '弱',
          },
        ]}
      />
    </StepsForm.StepForm>
    <StepsForm.StepForm
      initialValues={{
        type: '1',
        frequency: 'month',
      }}
      title="设定调度周期"
    >
      <ProFormDateTimePicker
        name="time"
        label="开始时间"
        rules={[{ required: true, message: '请选择开始时间！' }]}
      />
      <ProFormSelect
        name="frequency"
        label="监控对象"
        width="xs"
        valueEnum={{
          month: '月',
          week: '周',
        }}
      />
    </StepsForm.StepForm>
  </StepsForm>
);

export default UpdateForm;
