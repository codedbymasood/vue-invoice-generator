export const useControls = (setting: Setting) => {  
  const store = useStore();

  const getValue = () => {

    const id = setting['id'];
    const saveIn = setting['saveIn'];

    if ( 'invoice' === saveIn ) {      
      return store.currentInvoice?.[id] ?? setting['default'];
    } else if( 'company' === saveIn ) {
      return store.company?.[id] ?? setting['default'] ?? '';
    }
  }

  const updateVal = ( $event ) => {

    const value = ( $event.target ) ? $event.target.value : $event;
    
    const id = setting['id'];
    const saveIn = setting['saveIn'];

    if ( 'invoice' === saveIn ) {
      store.updateInvoice( id, value );
    } else if( 'company' === saveIn ) {
      store.updateCompany( id, value );
    }
  }

  const value = computed({
    get: () => getValue() ?? '',
    set: () => {}
  })

  return {
    value,
    getValue,
    updateVal
  }
}