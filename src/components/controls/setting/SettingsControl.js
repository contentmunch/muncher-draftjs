import React, {useState} from "react";
import './SettingsControl.scss';
import {Button, DropdownButton, Icon, Modal} from "@contentmunch/muncher-ui";
import PropTypes from "prop-types";

export default function SettingsControl({showStructure, setShowStructure, saveHandler, deleteHandler}) {
    const [showContent, setShowContent] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const toggleStructure = () => {
        setShowStructure(!showStructure);
    };

    const saveClickHandler = () => {
        if (saveHandler) {
            saveHandler();
        }
        setIsSaving(true);
        setTimeout(() => {
            setIsSaving(false);
        }, 3000);
    };
    const closeAll=()=>{
        setShowDeleteModal(false);
        setShowContent(false);
    }
    const deleteCancelHandler = () => {
        closeAll();
    };
    const deleteConfirmHandler = () => {
        if (deleteHandler) {
            deleteHandler();
        }
        closeAll();
    };
    const deleteClickHandler = () => {
        setShowDeleteModal(true);
    };
    return (
        <DropdownButton title="Settings" showContent={showContent} setShowContent={setShowContent}
                        drop="left" size="small" element={<Icon name="settings"/>} active={showContent}>
            <div className="muncher-settings--content">
                <Modal show={showDeleteModal} setShow={closeAll}>
                    <div className="delete-modal--info">
                    <Icon name="alert" size="large"/><h3>Delete article?</h3>
                    </div>
                    <div className="delete-modal--action">
                        <Button
                            onMouseDown={deleteConfirmHandler}
                            size="small"
                            variant="secondary"
                        > <Icon name="trash" weight={2}/>&nbsp;<h3>Delete</h3>
                        </Button>
                        <Button
                            onMouseDown={deleteCancelHandler}
                            size="small"
                            variant="secondary"
                        > <Icon name="close" weight={2}/>&nbsp;<h3>Cancel</h3>
                        </Button>
                    </div>

                </Modal>
                <div className="settings-content--item">
                    <Button
                        onMouseDown={saveClickHandler}
                        size="small"
                        disabled={isSaving}
                        variant="secondary"
                    > <Icon name="save"/><span>Save</span>
                    </Button>
                </div>
                <div className="settings-content--item">
                    <Button
                        onMouseDown={deleteClickHandler}
                        size="small"
                        variant="secondary"
                    > <Icon name="trash"/><span>Delete</span>
                    </Button>
                </div>
                <div className="settings-content--item">
                    <Button
                        onMouseDown={toggleStructure}
                        size="small"
                        variant="secondary"
                    >
                        {showStructure ? <Icon name="toggle-right"/> : <Icon name="toggle-left"/>}
                        <span>Data</span>
                    </Button>

                </div>
            </div>
        </DropdownButton>
    );
}
SettingsControl.propTypes = {
    showStructure: PropTypes.bool.isRequired,
    setShowStructure: PropTypes.func.isRequired,
    saveHandler: PropTypes.func,
    deleteHandler: PropTypes.func
};
