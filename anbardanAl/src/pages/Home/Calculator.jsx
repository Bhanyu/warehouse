

import React from 'react'
import styles from "./_home.module.scss"
function Calculator() {
  return (
    <section id={styles.calculatorPart}>
        <h2 className={styles.title}>Tile Calculator</h2>
        <p>
        After entering the intended area or just the length and width, select the appropriate tile size and press the "Calculate" button..

        </p>
        <div className={styles.container}>
        
     
            <div className={styles.calculator}>
            <div className={styles.calculatorRow}>
            <div className={styles.inputLabel}>
            <label htmlFor="length">Length(m)</label>
                <input type="number" />
            </div>
            <div className={styles.inputLabel}>
            <label htmlFor="width">Width(m)</label>
                <input type="number" />
            </div>
              
                </div>
                <div className={styles.calculatorRow}>
          
                <div className={styles.inputLabel}>
            <label htmlFor="length">Area (m2)</label>
                <input type="number" />
            </div>
            <div className={styles.inputLabel}>
            <label htmlFor="length">Tile Size (sm) | ex. 15x30</label>
                <input type="number" />
            </div>
                </div>
                <button type='submit'>Calculate</button>
            </div>
        
        </div>
    </section>
  )
}

export default Calculator
