import React, { useState } from "react";
import { Button, Layout, Modal, Row } from "antd";
import { EventCalendar } from "../components/EventCalendar";

interface Props {}

export const Event: React.FC = (props: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Layout>
      <EventCalendar events={[]} />
      <Row justify="center">
        <Button onClick={() => setModalVisible(true)}>Add event</Button>
      </Row>
      <Modal title="Add event" visible={modalVisible} footer={null} onCancel={() => setModalVisible(false)}></Modal>
    </Layout>
  );
};
