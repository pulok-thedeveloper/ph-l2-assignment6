import AdminFeatures from "./AdminFeatures";
import Cta from "./Cta";
import DriverFeatures from "./DriverFeatures";
import FeatureOverview from "./FeatureOverview";
import Hero from "./Hero";
import RiderFeatures from "./RiderFeatures";

const Features = () => {
    return (
        <div className="flex flex-col">
            <Hero/>
            <FeatureOverview/>
            <RiderFeatures/>
            <DriverFeatures/>
            <AdminFeatures/>
            <Cta/>
        </div>
    );
};

export default Features;