// Demonstrating States that is triggered by Events

// 'Refs' are a reliable way to access the properties of that
// underlying DOM node

// Component ==================================================================
var Note = React.createClass({

    // this is the default state of the Note
    getInitialState: function() {
        return {editing: false};
    },

    edit: function() {
        this.setState({editing: true});
    },

    remove: function() {
        this.props.onRemove(this.props.index);
    },

    save: function() {
        // when onChange is 'triggered', this will get the value
        // this.props.index lets us use appropriate note
        this.props.onChange(this.refs.newText.getDOMNode().value, this.props.index);

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

    // this allow us to edit our note
    // ref="newText"
    renderForm: function() {
        return (
            <div className="note">
                <textarea ref="newText" defaultValue={this.props.children}
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



// Component ==================================================================
var Board = React.createClass({
    // Method propTypes is a method that's part of the React Library and it
    // helps us to handle validation 
    propTypes: {
        count: function(props, propName) {
            if (typeof props[propName] !== "number"){
                return new Error('The count property must be a number');
            }
            if (props[propName] > 100) {
                return new Error('Creating ' + props[propName] + ' notes is a bit much?');
            }
        }
    },
    // Creating a function called 'getInitialState', going to be a function that is
    // going to return a list of notes.
    // This will make 'Note' a child of 'Board'
    getInitialState: function() {
        return {
            notes: []
        };
    },
    add: function(text) {
        var arr = this.state.notes;
        arr.push(text);
        this.setState({notes:arr});
    },
    update: function(newText, i) {
        // store state of notes
        var arr = this.state.notes;
        // uses current position in array and set the newText in it
        arr[i] = newText;
        // update the states of the note array
        this.setState({notes:arr});
    },
    remove: function(i) {
        var arr = this.state.notes;
        // remove ONE item at position 'i'
        arr.splice(i, 1);
        // update the states of the note array
        this.setState({notes: arr});
    },
    eachNote: function(note, i) {
        // attaching 'events' to each note
        return (
                <Note key={i}
                      index={i}
                      onChange={this.update}
                      onRemove={this.remove}
                      >{note}</Note>
            );
    },

    render: function() {
        // .bind takes care of default placeholder on the note everytime
        // new note is created
        return ( <div className="board">
                    {this.state.notes.map(this.eachNote)}
                    <button className="btn btn-sm btn-success glyphicon glyphicon-plus"
                            onClick={this.add.bind(null, "New Note")} />
                 </div>
               );
    }
});




//=========================================================================

// React.render(<Note>Hello World</Note>, document.getElementById('react-container'));

React.render(<Board count={10} />, document.getElementById('react-container'));








