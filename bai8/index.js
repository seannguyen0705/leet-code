// 2694. Event Emitter

class EventEmitter {
    
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */

    constructor(){
        this.events = {}
    }

    
    subscribe(eventName, callback) {
        if(this.events[eventName]){
            this.events[eventName].push(callback)
        }else {
            this.events[eventName] = [callback]
        }
        
        return {
            unsubscribe: () => {
                if(this.events[eventName] && this.events[eventName].length!==0){
                   const index = this.events[eventName].indexOf(callback);
                   this.events[eventName].splice(index,1);
                }
                return
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        const callbacks = this.events[eventName] || []


        return callbacks.map(fn=>(fn(...args)))
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */