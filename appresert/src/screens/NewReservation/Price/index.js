import React, { useState } from "react";
import cn from "classnames";
import styles from "./Price.module.sass";
import Card from "../../../components/Card";
import Tooltip from "../../../components/Tooltip";
import TextInput from "../../../components/TextInput";
import Switch from "../../../components/Switch";
import { format } from "date-fns";

const Price = ({ className, form, onChange }) => {
  const [resolution, setResolution] = useState(true);

  return (
    <Card className={cn(styles.card, className, styles.preview)}  title={"Price" } classTitle="title-green">
      <div className={styles.price}>
        <TextInput  className={styles.field} onChange={onChange} label={"Monthly subscription" } name={"price_month" } type={"number"} value={form.price_month} tooltip="Small description" required currency={"$" } />
        
          <>
            {/*<div className={styles.line}>
              <div className={styles.info}>
                Allow customers to pay they want{" "}
                <Tooltip  className={styles.tooltip}  title="Maximum 100 characters. No HTML or emoji allowed" icon="info"  place="top"/>
              </div>
              <Switch className={styles.switch} value={resolution} onChange={() => setResolution(!resolution)}/>
            </div>*/}
            <div className={styles.fieldset}>
              <TextInput className={styles.field} onChange={onChange} classLabel={styles.label} label="Dayly subscription" value={form.price_day} name="price_day" type="text" required currency="$"/>
              <TextInput className={styles.field} onChange={onChange} classLabel={styles.label} label="Hourly subscription" value={form.price_hour} name="price_hour" type="text" required currency="$"/>
            </div>
            <div className={styles.line}>
              <TextInput className={styles.field} onChange={onChange} classLabel={styles.label} label="Total subscription price" name="total-amount" type="text" required currency="$"/>
            </div>
          </>
      </div>
    </Card>
  );
};

export default Price;
