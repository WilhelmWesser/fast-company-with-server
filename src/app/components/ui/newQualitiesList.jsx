import React, { useQualities } from "../../hooks/useQualities";
import PropTypes from "prop-types";
import Quality from "../ui/qualities/quality";

const NewQualitiesList = ({ qualities }) => {
    // console.log(qualities);
    const { isLoading, getQualities } = useQualities();
    const quals = getQualities(qualities);
    if (!isLoading) {
        return (
            <>
                {quals.map((qual) => (
                    <Quality key={qual._id} {...qual} />
                ))}
            </>
        );
    } else {
        return "Loading...";
    }
};

NewQualitiesList.propTypes = {
    qualities: PropTypes.array
};

export default NewQualitiesList;
