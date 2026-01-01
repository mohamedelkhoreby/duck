import * as resourceService from "./resources.service.js";
export const getAllResources = async (req, res) => {
  try {
    const resources = await resourceService.getAll();
    res.status(200).json(resources);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getResourceById = async (req, res) => {
  try {
    const resource = await resourceService.getById(req.params.id);
    res.status(200).json(resource);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const createResource = async (req, res) => {
  try {
    const resource = await resourceService.createResource(req.user, req.body);
    res.status(201).json(resource);
  } catch (err) {
    res.status(403).json({ message: err.message });
  }
};

export const updateResource = async (req, res) => {
  try {
    const resource = await resourceService.update(req.params.id, req.body);
    res.status(200).json(resource);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteResource = async (req, res) => {
  try {
    await resourceService.remove(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
