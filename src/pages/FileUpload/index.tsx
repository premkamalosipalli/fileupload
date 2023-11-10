import React, { useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Button, message, Upload } from 'antd';
import { fileUploadService } from '@/services/fileUpload/fileUploadService';
import { getQueryParams } from '@/utils/format';
import styles from './index.less';
import { Simulate } from 'react-dom/test-utils';

const FileUpload: React.FC = () => {
  const userId = getQueryParams();
  const [percent, setPercent] = useState<number | undefined>();

  const uploadProps: UploadProps = {
    name: 'file',
    customRequest: async (options) => {
      const { file } = options;
      try {
        console.log(userId.userId);
        const response = await fileUploadService(file, userId.userId);
        if (response) {
          // @ts-ignore
          message.success(`${file.name} uploaded successfully`);
          setPercent(100);
        } else {
          // @ts-ignore
          message.error(`${file.name} upload failed`);
          setPercent(50);
        }
      } catch (error) {
        // @ts-ignore
        message.error(`${file.name} upload failed`);
        console.error('Error:', error);
        setPercent(0);
      }
    },
  };

  const getStatusColor = () => {
    if (percent === undefined) {
      return ''; // No color if percent is not set
    } else if (percent === 100) {
      return 'green'; // Green for 100% completion
    } else {
      return 'red'; // Red for failed upload
    }
  };

  return (
    <div className={styles.container}>
      <Upload {...uploadProps}>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
      <div
        style={{
          width: '100%',
          height: '5px',
          background: getStatusColor(),
          alignContent: 'center',
        }}
      />
    </div>
  );
};

export default FileUpload;
