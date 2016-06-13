var Note = React.createClass({
    getInitialState: function() {
        return {editing: false};
    },

    edit: function() {
        this.setState({editing: true});
    },

    remove: function() {
        alert('removing note');
    },

    save: function() {
        this.setState({editing: false});
    },

    // shows content of note
    renderDisplay: function() {
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
    },

    // edit note
    renderForm: function() {
        return (
            <div className="note">
                <textarea defaultValue={this.props.children}
                className="form-control"></textarea>
                <button onClick={this.save} className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk" />
            </div>
            );
    },

    render: function() {
        if(this.state.editing) {
            return this.renderForm();
        }
        else {
            return this.renderDisplay();
        }
    }
});

React.render(<Note>Hello World</Note>, 
    document.getElementById('react-container'));








