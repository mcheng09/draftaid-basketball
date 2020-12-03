import React from 'react';

import Undrafted from './Undrafted'

function UndraftedPositions(props) {
  const fields = ['tier', 'name', 'team'];
  return (
    <div className='col-md-6 col-sm-12 hidden-xs'>
      <div className='aid-title'>
        <i className='fa fa-signal'></i> Top Picks By Position
      </div>

      <div className='col-sm-4'>
        <span className="col-sm-12 position-title">Center</span>
        <Undrafted
          fields={fields}
          players={props.players}
          draft={(p) => props.draft(p)}
          size={15}
          position='C'
        />
      </div>

      <div className='col-sm-4'>
        <span className="col-sm-12 position-title">Power Forward</span>
        <Undrafted
          fields={fields}
          players={props.players}
          draft={(p) => props.draft(p)}
          size={15}
          position='PF'
        />
      </div>

      <div className='col-sm-4'>
        <span className="col-sm-12 position-title">Small Forward</span>
        <Undrafted
          fields={fields}
          players={props.players}
          draft={(p) => props.draft(p)}
          size={15}
          position='SF'
        />
      </div>

      <div className='col-sm-4'>
        <span className="col-sm-12 position-title">Point Guard</span>
        <Undrafted
          fields={fields}
          players={props.players}
          draft={(p) => props.draft(p)}
          size={15}
          position='PG'
        />
      </div>

      <div className='col-sm-4'>
        <span className="col-sm-12 position-title">Shooting Guard</span>
        <Undrafted
          fields={fields}
          players={props.players}
          draft={(p) => props.draft(p)}
          size={15}
          position='SG'
        />
      </div>
    </div>
  )
}

UndraftedPositions.propTypes = {
  draft: React.PropTypes.func.isRequired,
  players: React.PropTypes.array.isRequired,
};

export default UndraftedPositions
