import React from "react";
import {
  productCodeOptions,
  partNumberOptions,
  salesPersonOptions,
  deliveryTypeOptions,
  problemCodeOptions,
  tableData,
} from "./testData";
import CustomDropDown from "../../components/CustomDropDown/CustomDropDown";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomTable from "../../components/CustomTable/CustomTable";

const DeliveredProduct = () => {
  return (
    <div className="container mt-5">
      <div>
        <form className="row ">
          <div className="col-md-6  p-2 border">
            <h5>Product Information</h5>
            <CustomDropDown
              name="productCode"
              label="Product Code"
              secondLabel="Salt Delivery"
              width="25%"
              size="sm"
              options={productCodeOptions}
            />
            <CustomDropDown
              name="partNumber"
              label="Part Number"
              secondLabel="40 Solar Salt"
              width="30%"
              size="sm"
              options={partNumberOptions}
            />

            <CustomDropDown
              name="salesPerson"
              label="Sales Person"
              width="30%"
              size="sm"
              options={salesPersonOptions}
            />

            <div className="row gx-3">
              <div className="col-md-7 ">
                <CustomDropDown
                  name="deliveryType"
                  label="Delivery Type"
                  size="sm"
                  width="35%"
                  options={deliveryTypeOptions}
                />
                <CustomInput
                  name="defaultQuantity"
                  label="Default Quantity"
                  width="20%"
                  defaultValue="30"
                />
                <CustomInput
                  name="brineTankSize"
                  label="Brine Tank Size"
                  width="20%"
                  defaultValue="30"
                />
              </div>
              <div className="col-md-5  ">
                <h6>Pricing Information</h6>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="sytemOrContactPrice"
                    id="systemPrice"
                  />
                  <label class="form-check-label">System Price</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="sytemOrContactPrice"
                    id="contactPrice"
                    checked
                  />
                  <label class="form-check-label">Contact Price</label>
                </div>
                <CustomInput
                  name="price"
                  label="Price"
                  width="40%"
                  defaultValue="$10.45"
                />

                <CustomInput
                  name="contract"
                  label="Contract"
                  width="40%"
                  defaultValue="contract"
                />

                <CustomInput
                  name="expirationDate"
                  label="Expiration Date"
                  width="70%"
                  type="date"
                />
              </div>
            </div>
            <CustomDropDown
              name="problemCode"
              label="Service-problem code"
              size="sm"
              width="25%"
              options={problemCodeOptions}
            />

            <div style={{ height: "150px", overflow: "scroll" }}>
              <CustomTable tableData={tableData} />
            </div>
          </div>

          <div className="col-md-6 bg-primary p-2 border">
            <h5>Product Status</h5>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeliveredProduct;
