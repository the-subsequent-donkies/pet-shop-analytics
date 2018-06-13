'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Segment, Divider, Header, List, Icon, Table, Dropdown, Menu } from 'semantic-ui-react'
import {getCurrentUsersServer, getCurrentUserListServer, getRequestsServer} from '../store/analytics'

class Analytics extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //state here
    }
    this.props.getUsers().then( () => {
      this.props.getRequests()
    })
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
              <Header as="h2">{this.props.analytics.currentUsers}</Header>
            </Segment>
            <Segment>
              <Header as="h3">Views per hour:</Header>
              <Icon name="computer" size="big" />
              <Header as="h2">0</Header>
            </Segment>
            <Segment>
              <Header as="h3">Average Time Spent:</Header>
              <Icon name="time" size="big" />
              <Header as="h2">0</Header>
            </Segment>
          </Segment.Group>
          <Segment>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>TYPE</Table.HeaderCell>
                  <Table.HeaderCell>Socket ID</Table.HeaderCell>
                  <Table.HeaderCell>PAGE</Table.HeaderCell>
                  <Table.HeaderCell>TIME</Table.HeaderCell>
                  <Table.HeaderCell>BROWSER</Table.HeaderCell>
                  <Table.HeaderCell>USER ID</Table.HeaderCell>
                  <Table.HeaderCell>USER AGENT</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {
                  this.props.analytics.requests.map(item =>
                    <Table.Row key={item.id}>
                      <Table.Cell>{item.reqType}</Table.Cell>
                      <Table.Cell>{item.socketId}</Table.Cell>
                      <Table.Cell>{item.page}</Table.Cell>
                      <Table.Cell>{item.time}</Table.Cell>
                      <Table.Cell>{item.browser}</Table.Cell>
                      <Table.Cell>{item.userId}</Table.Cell>
                      <Table.Cell>{item.userAgent}</Table.Cell>
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

const mapState = (state) => {
  return {
    analytics: state.analytics
  }
}

const mapDispatch = (dispatch) => {
  return {
    getUsers: () => dispatch(getCurrentUsersServer()),
    getUserList: () => dispatch(getCurrentUserListServer()),
    getRequests: () => dispatch(getRequestsServer())
  }
}

export default connect(mapState, mapDispatch)(Analytics)
