import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const today = new Date();
  const sixMonthsAgo = new Date(today.getFullYear(), today.getMonth() - 6, 1);

  const filterData = (data) => {
    return data.filter((item) => {
      const itemDate = new Date(item.date);
      return itemDate >= sixMonthsAgo;
    });
  };
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="IArmendariz97"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
        transformData={filterData}
      />
    </Row>
  );
}

export default Github;
