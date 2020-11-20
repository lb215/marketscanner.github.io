import React from 'react'
import { Card, Text, Header } from "tabler-react";

export default function BasicStat({total, label, suffix, subtitle}) {

    return (
        <Card>
            <Card.Body className="p-3 text-center">
                <Header size={2} className={"m-0 mb-1"} >
                    <span style={{"color" : total > 0 ? "green" : "red" }}>{total}{suffix && suffix}</span> 
                </Header>
                <Text color="muted" className=" mb-2">
                    <span style={{"fontWeight" : 500}}>{label}</span>
                </Text>
                {subtitle &&
                <Text color="muted" className=" mb-4">
                    <span style={{"fontSize" : "0.8rem"}}>{subtitle}</span>
                </Text>
                }
            </Card.Body>
        </Card>
    );

}