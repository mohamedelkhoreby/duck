import Resource from "../../db/model/resource.model.js";

export const createResource = async (user, data) => {
  if (user.role !== "admin") {
    throw new Error("Unauthorized: Only admins can create resources");
  }

  const resource = await Resource.create({
    name: data.name,
    totalSlots: data.totalSlots,
    availableSlots: data.totalSlots, // initially all slots available
  });

  return resource;
};

/**
 * Update a resource
 */
export const updateResource = async (user, resourceId, data) => {
  if (user.role !== "admin") {
    throw new Error("Unauthorized: Only admins can update resources");
  }

  const resource = await Resource.findByIdAndUpdate(resourceId, data, {
    new: true,
  });

  if (!resource) throw new Error("Resource not found");
  return resource;
};

/**
 * Delete a resource
 */
export const deleteResource = async (user, resourceId) => {
  if (user.role !== "admin") {
    throw new Error("Unauthorized: Only admins can delete resources");
  }

  const resource = await Resource.findByIdAndDelete(resourceId);
  if (!resource) throw new Error("Resource not found");
};
