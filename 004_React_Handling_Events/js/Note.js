var Note = React.createClass({
    // Functions!
    edit: function() {
        alert('editing note');
    },

    remove: function() {
        alert('removing note');
    },

    // adding onClick functions to handle events
    render: function() {
        return (
            <div className="note">
                <p>{this.props.children}</p>
                <span>
                    <button onClick={this.edit}
                            className="btn btn-primary glyphicon glyphicon-pencil"/>
                    <button onClick={this.remove}
                            className="btn btn-danger glyphicon glyphicon-trash"/>
                </span>
            </div>
            );
    }
});

React.render(<Note>Hello World</Note>, 
    document.getElementById('react-container'));