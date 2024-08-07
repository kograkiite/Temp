
import { Typography, Card, Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';
const { Title, Text } = Typography;

const Welcome = () => {
  const { t } = useTranslation();

  return (
    <div className="text-left py-40 bg-cover bg-center" style={{ backgroundImage: "url(https://res.cloudinary.com/dbaoct3be/image/upload/v1720326895/z5609830512219_6a06895a2d22b508c9a1c233f119d9d9_jc5ypo.jpg)" }}>
      <div className="container mx-auto">
        <Row justify="left" align="middle" style={{ minHeight: '35vh' }}>
          <Col>
            <Card className="bg-cyan-500 bg-opacity-90 p-10 rounded-lg shadow-md text-center">
              <Title level={2} className="text-4xl">
              {t('welcome_to')} <i>Pet Bro</i>
              </Title>
              <div id="typed-strings" className="text-lg italic">
                <Text className="text-white">Happy for pets is happy for you.</Text>
              </div>
              <Text id="typed" className="text-lg italic" style={{ whiteSpace: 'pre' }}></Text>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Welcome;
