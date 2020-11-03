import React, { Component } from "react";

class DemoClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
      title: "",
      capital: "",
    };
  }

  componentDidMount() {
    console.log("Class Component Mounted");
    this.setState({ title: "New One" });
  }
  componentDidUpdate() {
    console.log("Class Component Updated");
  }
  componentWillUnmount() {
    console.log("Going to removed");
  }
  render() {
    const { capital, country, title } = this.state;
    return (
      <div>
        <h1>Capital : {capital}</h1>
        <h1>Country : {country}</h1>
        <h1>Title : {title}</h1>
        <table>
          <tbody>
            <tr>
              <td>
                <input
                  placeholder="title"
                  onChange={(event) =>
                    this.setState({
                      title: event.currentTarget.value,
                    })
                  }
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  placeholder="country"
                  onChange={(event) =>
                    this.setState({
                      country: event.currentTarget.value,
                    })
                  }
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  placeholder="capital"
                  onChange={(event) =>
                    this.setState({
                      capital: event.currentTarget.value,
                    })
                  }
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default DemoClass;
