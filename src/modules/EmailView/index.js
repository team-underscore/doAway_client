// {bucket_name}/email/{id}

import React from 'react';

class EmailView extends React.Component {

  render() {
    return (
      <p>Email view here {this.props.match.params.id}</p>
    )
  }
}

export default EmailView;