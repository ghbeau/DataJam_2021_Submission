import React from 'react'

import './form.css'

class IncidentForm extends React.Component {
    render() {
        return <div id='incident-form-wrapper'>
            <h1>Form</h1>
            <p>Record an incident of human trafficking to add to the Incident Graph. 
                This will help track trafficking pathways and corridors around the globe.</p>
            <form>
                <fieldset className='fieldSet'>
                    <h2>Incident Information</h2>
                    <div class="form-field">
                        <label className='form-label' for="ngo">NGO Name </label>
                        <input type="text" name="ngo" class='field-text' />
                    </div>
                    <div class="form-field">
                        <label className='form-label' for="date">Date </label>
                        <input type="date" name="date" class='field-date' required/>
                    </div>
                    <div class="form-field">
                        <label className='form-label' for="city">City </label>
                        <input type="text" name="city" class='field-text' required/>
                    </div>
                    <div class="form-field">
                        <label className='form-label' for="province">Province/State </label>
                        <input type="text" name="province" class='field-text' required/>
                    </div>
                    <div class="form-field">
                        <label className='form-label' for="zip">Postal Code </label>
                        <input type="text" name="zip" class='field-text' required/>
                    </div>
                    <div class="form-field">
                        <label className='form-label' for="country">Country </label>
                        <input type="text" name="country" class='field-text' required/>
                    </div>
                    <div class="form-field">
                        <label className='form-label' for="service">Services/Help Provided</label>
                        <input type="text" name="service" class='field-text' />
                    </div>
                    <div class="form-field">
                        <label className='form-label' for="details">Incident Details</label>
                        <input type="text" name="details" class='field-text' />
                    </div>
                </fieldset>

                <fieldset className='fieldSet'>
                    <h2>Victim/Survivor's Original Location</h2>
                    <div class="form-field">
                        <label className='form-label' for="prev-city">City </label>
                        <input type="text" name="prev-city" class='field-text' required/>
                    </div>
                    <div class="form-field">
                        <label className='form-label' for="prev-province">Province/State </label>
                        <input type="text" name="prev-province" class='field-text' required/>
                    </div>
                    <div class="form-field">
                        <label className='form-label' for="zip">Postal Code </label>
                        <input type="text" name="zip" class='field-text' required/>
                    </div>
                    <div class="form-field">
                        <label className='form-label' for="prev-country">Country </label>
                        <input type="text" name="prev-country" class='field-text' required/>
                    </div>
                </fieldset>

                <fieldset className='fieldSet'>
                    <h2>Victim/Survivor's Trafficked Location</h2>
                    <div class="form-field">
                        <label className='form-label' for=" next-city">City </label>
                        <input type="text" name="next-city" class='field-text' required/>
                    </div>
                    <div class="form-field">
                        <label className='form-label' for="next-province">Province/State </label>
                        <input type="text" name="next-province" class='field-text' required/>
                    </div>
                    <div class="form-field">
                        <label className='form-label' for="zip">Postal Code </label>
                        <input type="text" name="zip" class='field-text' required/>
                    </div>
                    <div class="form-field">
                        <label className='form-label' for="next-country">Country </label>
                        <input type="text" name="next-country" class='field-text' required/>
                    </div>
                </fieldset>

                <fieldset className='fieldSet'>
                    <h2>NGO Employee/Responder Contact Info</h2>
                    <div class="form-field">
                        <label className='form-label' for="city">City </label>
                        <input type="text" name="city" class='field-text' required/>
                    </div>
                    <div class="form-field">
                        <label className='form-label' for="province">Province/State </label>
                        <input type="text" name="province" class='field-text' required/>
                    </div>
                    <div class="form-field">
                        <label className='form-label' for="zip">Postal Code </label>
                        <input type="text" name="zip" class='field-text' required/>
                    </div>
                    <div class="form-field">
                        <label className='form-label' for="country">Country </label>
                        <input type="text" name="country" class='field-text' required/>
                    </div>
                </fieldset>
                
                <input type="submit" value="Submit" id='submit'/>
            </form>
        </div>
    }
}

export default IncidentForm