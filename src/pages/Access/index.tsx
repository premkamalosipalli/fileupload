import { PageContainer } from '@ant-design/pro-components';
import { Access, useAccess } from '@umijs/max';
import { Button } from 'antd';

const AccessPage: React.FC = () => {
  const access = useAccess();
  return (
    <PageContainer
      ghost
      header={{
        title: 'Access',
      }}
    >
      <Access accessible={access.canSeeAdmin}>
        <Button> Admin </Button>
      </Access>
    </PageContainer>
  );
};

export default AccessPage;
