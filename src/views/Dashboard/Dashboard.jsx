import React from "react";
import {
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from "reactstrap";

import Rodada from "./Rodada/Rodada";
import Mensal from "./Mensal/Mensal";
import Anual from "./Anual/Anual";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      horizontalTabs: "rodada"
    };
  }

  changeActiveTab = (e, tabState, tadName) => {
    e.preventDefault();
    this.setState({
      [tabState]: tadName
    });
  };

  render() {
    return (
      <div className="content">
        <Row>
          <Col xs="12">
            <Nav className="nav-pills-info" pills>
              <NavItem>
                <NavLink
                  data-toggle="tab"
                  href="#"
                  className={
                    this.state.horizontalTabs === "rodada" ? "active" : ""
                  }
                  onClick={e =>
                    this.changeActiveTab(e, "horizontalTabs", "rodada")
                  }
                >
                  Liga por rodada
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  data-toggle="tab"
                  href="#"
                  className={
                    this.state.horizontalTabs === "mensal" ? "active" : ""
                  }
                  onClick={e =>
                    this.changeActiveTab(e, "horizontalTabs", "mensal")
                  }
                >
                  Liga mensal
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  data-toggle="tab"
                  href="#"
                  className={
                    this.state.horizontalTabs === "anual" ? "active" : ""
                  }
                  onClick={e =>
                    this.changeActiveTab(e, "horizontalTabs", "anual")
                  }
                >
                  Liga anual
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent
              className="tab-space"
              activeTab={this.state.horizontalTabs}
            >
              <TabPane tabId="rodada">
                <Rodada />
              </TabPane>
              <TabPane tabId="mensal">
                <Mensal />
              </TabPane>
              <TabPane tabId="anual">
                <Anual />
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
