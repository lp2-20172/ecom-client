import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

import {
    toggleDrawerDock,
    setResponsive,
    setAnchor
} from 'material-ui-responsive-drawer'

import Switch from 'material-ui/Switch';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl } from 'material-ui/Form';
import { FormControlLabel } from 'material-ui/Form'




class Home extends Component {

    render() {
        const {
            responsiveDrawer,
            toggleDrawerDock,
            setResponsive,
            setAnchor
        } = this.props

        return (




            <div>

                <FormControlLabel
                    control={
                        <Switch
                            checked={responsiveDrawer.responsive}
                            onChange={() => { setResponsive(!responsiveDrawer.responsive) }}
                        />
                    }
                    label={responsiveDrawer.responsive ? "Disable responsive" : "Enable responsive"}
                /><br />
                <FormControlLabel
                    control={
                        <Switch
                            checked={responsiveDrawer.docked}
                            onChange={toggleDrawerDock}
                        />
                    }
                    label={responsiveDrawer.docked ? "Disable docked" : "Enable docked"}
                /><br />




                <FormControl >
                    <FormLabel>Anchor</FormLabel>
                    <RadioGroup
                        aria-label="Anchor"
                        name="anchor"
                        selectedValue={responsiveDrawer.anchor}
                        onChange={(event, value) => { setAnchor(value); }}
                    >
                        <FormControlLabel value="left" control={<Radio />} label="Left" />
                        <FormControlLabel value="right" control={<Radio />} label="Right" />
                        <FormControlLabel value="top" control={<Radio />} label="Top" />
                        <FormControlLabel value="bottom" control={<Radio />} label="Bottom" />



                    </RadioGroup>


                </FormControl>


            </div>
        );
    }
}

Home.propTypes = {
    toggleDrawerDock: PropTypes.func.isRequired,
    setResponsive: PropTypes.func.isRequired,
    setAnchor: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    const { responsiveDrawer } = state;
    return {
        responsiveDrawer
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        
        toggleDrawerDock: () => {
            dispatch(toggleDrawerDock());
        },
        setResponsive: (isResponsive) => {
            dispatch(setResponsive(isResponsive));
        },
        setAnchor: (anchor) => {
            dispatch(setAnchor(anchor));
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

