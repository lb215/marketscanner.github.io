import React, { Component, Fragment } from "react";
import "tabler-react/dist/Tabler.css";
import { StatsCard, Page, Grid, Card, Button } from "tabler-react";
import BasicStat from "../../components/BasicStat";

import Entities from '../../data/data.json';
import "./Dashboard.css";

function Dashboard() {
    return (
        <Fragment>
            <div style={{textAlign: "right", paddingRight: "1rem"}}>
                <span style={{fontSize: "0.8rem"}}>{(new Date()).toDateString()}</span>
            </div>

            <Page.Content title="Dashboard">
                {Entities.map(data =>
                (<Grid.Row cards={true}>
                    <Grid.Col width={12} 
                            sm={6} 
                            lg={4}>

                        <BasicStat 
                            total={data.NetFlow} 
                            label={data.Title}
                            suffix={data.Suffix}
                            subtitle={data.SubTitle} />
                    </Grid.Col>
                </Grid.Row>))}
            </Page.Content>
        </Fragment>
    );
}

export default Dashboard;