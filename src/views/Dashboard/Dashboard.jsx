import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';
import { Grid, Row, Col, Table } from 'react-bootstrap';
import {Map, Marker, GoogleApiWrapper, Polygon} from 'google-maps-react';
import {Card} from 'components/Card/Card.jsx';
import {StatsCard} from 'components/StatsCard/StatsCard.jsx';
import {Tasks} from 'components/Tasks/Tasks.jsx';
import {
    dataPie,
    legendPie,
    dataSales,
    optionsSales,
    responsiveSales,
    legendSales,
    dataBar,
    optionsBar,
    responsiveBar,
    legendBar
} from 'variables/Variables.jsx';

class Dashboard extends Component {
    createLegend(json){
        var legend = [];
        for(var i = 0; i < json["names"].length; i++){
            var type = "fa fa-circle text-"+json["types"][i];
            legend.push(
                <i className={type} key={i}></i>
            );
            legend.push(" ");
            legend.push(
                json["names"][i]
            );
        }
        return legend;
    }
    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="pe-7s-phone text-primary"></i>}
                                statsText="Total user"
                                statsValue="16"
                                statsIcon={<i className="fa fa-refresh"></i>}
                                statsIconText="Updated now"
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="pe-7s-bicycle text-success"></i>}
                                statsText="Borrowing"
                                statsValue="20"
                                statsIcon={<i className="fa fa-calendar-o"></i>}
                                statsIconText="Last day"
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="pe-7s-chat text-warning"></i>}
                                statsText="Messages"
                                statsValue="23"
                                statsIcon={<i className="fa fa-clock-o"></i>}
                                statsIconText="In the last hour"
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="pe-7s-look text-danger"></i>}
                                statsText="Suspect"
                                statsValue=""
                                statsIcon={<i className="fa fa-refresh"></i>}
                                statsIconText="Updated now"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8}>
                            <Card
                                statsIcon="fa fa-history"
                                id="chartHours"
                                title="Users Behavior"
                                category="24 Hours performance"
                                stats="Updated 3 minutes ago"
                                content={
                                    <div className="ct-chart">
                                        <ChartistGraph
                                            data={dataSales}
                                            type="Line"
                                            options={optionsSales}
                                            responsiveOptions={responsiveSales}
                                        />
                                    </div>
                                    }
                                legend={
                                    <div className="legend">
                                        {this.createLegend(legendSales)}
                                    </div>
                                }
                            />
                        </Col>
                        <Col md={4}>
                            <Card
                                statsIcon="fa fa-clock-o"
                                title="Histories"
                                category="Current bike usages"
                                stats="Updated 1 min ago"
                                content={
                                    <Table striped hover>
                                        <thead>
                                        <tr>
                                            {
                                                ["bike name", "user", "time"].map((prop, key) => {
                                                    return (
                                                        <th  key={key}>{prop}</th>
                                                    );
                                                })
                                            }
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            [
                                                ["Dakota Rice" , "$36,738" , "Niger"  ] ,
                                                ["Minerva Hooper" , "$23,789" , "Curaçao"  ] ,
                                                ["Sage Rodriguez" , "$56,142" , "Netherlands" ] ,
                                                ["Philip Chaney" , "$38,735" , "Korea, South"  ] ,
                                                ["Doris Greene" , "$63,542" , "Malawi" ] ,
                                                ["Mason Porter" , "$78,615" , "Chile" ]
                                            ].map((prop,key) => {
                                                return (
                                                    <tr key={key}>{
                                                        prop.map((prop,key)=> {
                                                            return (
                                                                <td  key={key}>{prop}</td>
                                                            );
                                                        })
                                                    }</tr>
                                                )
                                            })
                                        }
                                        </tbody>
                                    </Table>
                                }
                                legend={
                                    <a> View full histories </a>
                                }
                            />
                        </Col>
                    </Row>

                    <Row>

                        <Col md={12}>
                            <Card
                                title="Feedbacks"
                                stats="Updated 3 minutes ago"
                                statsIcon="fa fa-history"
                                content={
                                    <div className="table-full-width">
                                        <table className="table">
                                            <Tasks />
                                        </table>
                                    </div>
                                }
                            />
                        </Col>
                    </Row>

                </Grid>
            </div>
        );
    }
}

export default Dashboard;
