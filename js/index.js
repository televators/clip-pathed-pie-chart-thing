( () => {
  /**
   * Interactive Pie/Wheel Thing.
   */

  const slices = document.querySelectorAll( '.wheel__slice' );

  function toggle_slice_and_phase( event ) {
    const prev_slice       = document.querySelector( '.wheel__slice.--active' ),
      active_slice         = event.target.closest( '.wheel__slice' ),
      prev_content         = document.querySelector( '.start-phase.--active' ),
      slice_content_id     = active_slice.getAttribute( 'data-content-id' ),
      active_content       = document.querySelector( `#${ slice_content_id }` );

    // Cancel if user clicks already active slice
    if ( prev_slice == active_slice ) {
      return;
    }

    // Deactivate previous slice and phase
    prev_slice.classList.remove( '--active' );
    prev_content.classList.remove( '--active' );

    // Activate new slice and phase
    active_slice.classList.add( '--active' );
    active_content.classList.add( '--active' );
  }

  slices.forEach( slice => {
    slice.addEventListener( 'click', toggle_slice_and_phase );
  } );
} )();
