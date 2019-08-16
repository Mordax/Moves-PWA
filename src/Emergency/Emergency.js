import React, { Component } from 'react';
import MenuItem from './MenuItem/MenuItem';
import { withTranslation } from "react-i18next";

class Emergency extends Component {

    state = {
        dkCallCenter: "",
        maCallCenter: ""
    }

    url = `https://movesws-teamc-baa.herokuapp.com/api/phoneNumber/`;
    
    phoneName = ['dkCallCenter', "maCallCenter"];

    componentDidMount() {
        this.phoneName.forEach(e => {
            fetch(this.url + e, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "http://localhost:3000",
                    "Authorization": `BEARER eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Im5ua25ndXllbkBteXNlbmVjYS5jYSIsImZ1bGxOYW1lIjoiS2hhbmcgTmd1eWVuIiwicm9sZXMiOlsiRGV2ZWxvcGVyIiwiTGVhZGVyIl0sImNsYWltcyI6W3siX2lkIjoiNWQzN2MxYzE5ZTM5NjIyOWRjZGI1M2I3IiwidHlwZSI6IlRhc2siLCJ2YWx1ZSI6IlVzZXJQZXJtaXNzaW9uRWRpdCJ9LHsiX2lkIjoiNWQzN2MxYzE5ZTM5NjIyOWRjZGI1M2I2IiwidHlwZSI6IlRhc2siLCJ2YWx1ZSI6IlRleHRDb250ZW50RWRpdCJ9LHsiX2lkIjoiNWQzN2M1YjE5ZTM5NjIyOWRjZGI1M2I5IiwidHlwZSI6IlRhc2siLCJ2YWx1ZSI6IkNvbnRlbnRWaWV3In0seyJfaWQiOiI1ZDM3Y2FkMjBiYmM0OTQzYjgwM2JiYWIiLCJ0eXBlIjoiVGFzayIsInZhbHVlIjoiVXNlclByb2ZpbGVFZGl0In0seyJfaWQiOiI1ZDM3Y2FkMjBiYmM0OTQzYjgwM2JiYWEiLCJ0eXBlIjoiVGFzayIsInZhbHVlIjoiVXNlclByb2ZpbGVWaWV3In0seyJfaWQiOiI1ZDNhMDAzZWI1ZDFhOTc4YzBkY2MwYzciLCJ0eXBlIjoiVGFzayIsInZhbHVlIjoiQWxlcnRFZGl0In0seyJfaWQiOiI1ZDU1MGI2M2Y1NDU0Y2Q1OTc3MWE5MmIiLCJ0eXBlIjoiVGFzayIsInZhbHVlIjoiUGhvbmVOdW1iZXJFZGl0In1dLCJleHAiOjE1NzM2NjE2NTcsImlhdCI6MTU2NTg4NTY1Nn0.uewbDwSp0akoNPK3ljQYTiNjLlW8_5x5uAivDMOZiqM`
                },
                
            })
            .then(response => response.json())
            .then(res => {
                this.setState({ [e]: res.data[0].formattedNumber });
            });
        });
    }

    render() {
        const { t } = this.props;
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <a href={`tel:${this.state.maCallCenter}`}>
                            <MenuItem buttonType="warning" image="/images/em-morocco.png" title={t('moroccoCallCenter')} subtitle={this.state.maCallCenter} />
                        </a>
                    </div>
                    <div className="col-md-6">
                        <a href={`tel:${this.state.dkCallCenter}`}>
                            <MenuItem buttonType="danger" image="/images/em-denmark.png" title={t('denmarkCallCenter')} subtitle={this.state.dkCallCenter} />
                        </a>
                    </div>
                </div>
            </div>
        );
    }

}

export default withTranslation() (Emergency);