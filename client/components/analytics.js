'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Segment, Divider, Header, List, Icon, Table, Dropdown, Menu } from 'semantic-ui-react'

class Analytics extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //state here
    }
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <Segment.Group raised horizontal>
          <Segment.Group vertical>
            <Segment>
              <Header as="h3">Current Users:</Header>
              <Icon name="user plus" size="big" />
              <Header as="h2">0</Header>
            </Segment>
            <Segment>
              <Header as="h3">Views per hour:</Header>
              <Icon name="computer" size="big" />
              <Header as="h2">0</Header>
            </Segment>
            <Segment>
              <Header as="h3">Avergage Time Spent:</Header>
              <Icon name="time" size="big" />
              <Header as="h2">0</Header>
            </Segment>
          </Segment.Group>
          <Segment>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>TYPE</Table.HeaderCell>
                  <Table.HeaderCell>PAGE</Table.HeaderCell>
                  <Table.HeaderCell>TIME</Table.HeaderCell>
                  <Table.HeaderCell>BROWSER</Table.HeaderCell>
                  <Table.HeaderCell>USER ID</Table.HeaderCell>
                  <Table.HeaderCell>USER AGENT</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {
                  this.props.analyticItems.map(item =>
                    <Table.Row key={item.userId}>
                      <Table.Cell>{item.type}</Table.Cell>
                      <Table.Cell>{item.page}</Table.Cell>
                      <Table.Cell>{item.time}</Table.Cell>
                      <Table.Cell>{item.browser}</Table.Cell>
                      <Table.Cell>{item.userId}</Table.Cell>
                      <Table.Cell>{item.user}</Table.Cell>
                    </Table.Row>
                  )}
              </Table.Body>
            </Table>
          </Segment>
        </Segment.Group>
      </div>
    )
  }

}

export default Analytics
